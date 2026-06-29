def validate_sql(sql: str):

    check_sql = sql.strip().lower()

    if not check_sql.startswith("select"):
        return False

    forbidden = [
        "drop",
        "delete",
        "update",
        "insert",
        "alter",
        "truncate",
        "create",
        "grant",
        "revoke"
    ]

    for word in forbidden:
        if word in check_sql:
            return False

    return True