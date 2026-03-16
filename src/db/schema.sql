CREATE TABLE IF NOT EXISTS policy_likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  member_id TEXT NOT NULL,
  policy_index INTEGER NOT NULL,
  count INTEGER DEFAULT 0,
  UNIQUE(member_id, policy_index)
);
