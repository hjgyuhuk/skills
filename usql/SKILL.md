---
name: usql
description: Use usql as the universal SQL client for interacting with PostgreSQL, MySQL, SQLite, SQL Server, Oracle and many other databases.
---

# usql

Use `usql` whenever interacting with SQL databases from the command line.

Unlike database-specific CLIs (`psql`, `mysql`, `sqlite3`, `sqlcmd`, etc.), `usql` provides a unified interface across many databases while supporting SQL execution, metadata inspection, scripting, and data migration.

## When to use

Prefer `usql` when the task involves:

- Executing SQL queries
- Exploring schemas
- Listing tables, indexes, views, or databases
- Running SQL scripts
- Exporting query results
- Importing or copying data
- Database administration
- Cross-database data migration
- Interactive debugging

## General principles

- Prefer SQL over shell parsing.
- Let the database perform filtering, aggregation, sorting, and joins.
- Avoid fetching unnecessary rows.
- Use `LIMIT` for exploratory queries.
- Never assume a table or column exists.
- Inspect metadata first if the schema is unknown.

Typical workflow:

1. Connect.
2. Inspect schema.
3. Write query.
4. Validate result.
5. Modify data only after confirming intent.

## Connection

Use DSN URLs.

Examples:

```bash
usql postgres://user:pass@host/db
usql mysql://user:pass@host/db
usql sqlite:///tmp/test.db
usql oracle://user:pass@host/service
```

For one-off execution:

```bash
usql "$DATABASE_URL" -c "SELECT version();"
```

Run a script:

```bash
usql "$DATABASE_URL" -f schema.sql
```

## Metadata inspection

Prefer built-in meta commands before guessing.

Useful commands:

```text
\dt
\d table_name
\dv
\di
\df
\dn
\l
\conninfo
```

When the database is unfamiliar:

```text
\?
```

to list available commands.

## Query execution

Interactive:

```sql
SELECT *
FROM users
LIMIT 20;
```

Non-interactive:

```bash
usql "$DATABASE_URL" \
    -c "SELECT COUNT(*) FROM users;"
```

## Output formats

JSON:

```bash
usql "$DATABASE_URL" \
    --json \
    -c "SELECT * FROM users;"
```

CSV:

```bash
usql "$DATABASE_URL" \
    --csv \
    -c "SELECT * FROM users;"
```

Quiet mode:

```bash
usql "$DATABASE_URL" \
    -q \
    -c "SELECT ..."
```

## Variables

Use variables when reusing values.

```text
\set ID 123

SELECT *
FROM users
WHERE id = :ID;
```

## Transactions

For destructive operations:

```sql
BEGIN;

UPDATE ...

SELECT ...

COMMIT;
```

Rollback if verification fails.

## Cross-database copy

`usql` supports copying directly between databases.

Example:

```text
\copy \
postgres://... \
mysql://... \
'SELECT id,name FROM users' \
'users(id,name)'
```

Prefer this over exporting intermediate CSV files when appropriate.

## Best practices

Always:

- inspect schema first
- limit exploratory queries
- use explicit column names
- wrap bulk modifications in transactions
- verify row counts before DELETE or UPDATE

Avoid:

- SELECT *
- deleting without WHERE
- updating without verification
- assuming vendor-specific SQL works everywhere

## SQL portability

Remember different databases have different SQL dialects.

Avoid vendor-specific syntax unless the target database is known.

## Safety

Before executing destructive SQL:

- verify target database
- verify affected table
- estimate affected rows
- use transactions whenever possible

If the task requests deletion of all rows or schema changes, explicitly confirm intent unless the request already makes it unambiguous.

## Useful patterns

Count rows:

```sql
SELECT COUNT(*)
FROM table_name;
```

Preview:

```sql
SELECT *
FROM table_name
LIMIT 20;
```

Inspect table:

```text
\d table_name
```

List tables:

```text
\dt
```

Run SQL file:

```bash
usql "$DATABASE_URL" -f script.sql
```

JSON export:

```bash
usql "$DATABASE_URL" \
    --json \
    -c "SELECT ..."
```

CSV export:

```bash
usql "$DATABASE_URL" \
    --csv \
    -c "SELECT ..."
```

## Notes

- `usql` is largely compatible with PostgreSQL's `psql` workflow.
- Many `psql` meta commands are available.
- Prefer built-in meta commands instead of querying system catalogs directly when possible.
