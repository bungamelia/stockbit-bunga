SELECT u1.ID, u1.UserName, u2.username as ParentUserName
FROM user as u1
LEFT JOIN user as u2 ON u1.parent = u2.id