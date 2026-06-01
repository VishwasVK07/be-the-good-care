import sqlite3

DB_NAME = 'bethegoodcare.db'

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS recognitions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            staff_name TEXT NOT NULL,
            department TEXT NOT NULL,
            tags TEXT NOT NULL,
            note TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

def add_recognition(staff_name, department, tags, note):
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO recognitions (staff_name, department, tags, note)
        VALUES (?, ?, ?, ?)
    ''', (staff_name, department, ','.join(tags), note))
    conn.commit()
    conn.close()

def get_all_recognitions():
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM recognitions ORDER BY created_at DESC')
    rows = cursor.fetchall()
    conn.close()
    return [
        {
            'id': row[0],
            'staff_name': row[1],
            'department': row[2],
            'tags': row[3].split(','),
            'note': row[4],
            'created_at': row[5]
        }
        for row in rows
    ]

def get_strengths(staff_name):
    conn = sqlite3.connect(DB_NAME)
    cursor = conn.cursor()
    cursor.execute('''
        SELECT tags FROM recognitions WHERE staff_name = ?
    ''', (staff_name,))
    rows = cursor.fetchall()
    conn.close()
    
    tag_counts = {}
    for row in rows:
        tags = row[0].split(',')
        for tag in tags:
            tag = tag.strip()
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
    
    return tag_counts