CREATE TABLE IF NOT EXISTS supporters (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  name          TEXT    NOT NULL,
  email         TEXT    NOT NULL,
  area          TEXT,
  support_member TEXT,
  message       TEXT,
  created_at    TEXT    NOT NULL DEFAULT (datetime('now', 'localtime'))
);
