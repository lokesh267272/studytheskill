import { Module, FlashCard } from '../types';

export const COURSE_MODULES: Module[] = [
  {
    id: 'm1',
    title: 'Module 1: DBMS Basics',
    priority: 1,
    topics: [
      {
        id: 't1-0',
        title: 'What is DBMS?',
        definition: 'Think of a DBMS (Database Management System) as a smart librarian for your data. Instead of just throwing files into a messy pile, this software neatly organizes, protects, and retrieves your information whenever you need it.',
        why: 'Without it, we used to save everything in simple text files. The problem? It was a mess! Data got duplicated, lost, or mismatched. DBMS fixes all that chaos by enforcing strict rules.',
        example: 'Imagine a school registry. If it were just files, two teachers might update a student’s grade at the same time and overwrite each other. A DBMS prevents that conflict.',
        belAngle: {
          questionStyle: 'Which of the following is NOT a function of DBMS?',
          answer: 'Designing the operating system (It manages data, not the OS).',
          confusion: 'Remember: It manages the DATA, not the computer hardware or the OS itself.',
        },
        revisionHook: 'DBMS = The Smart Librarian',
        animationType: 'dbms_vs_files',
        slug: 'what-is-dbms',
        telugu: {
          title: 'DBMS ante entante?',
          definition: 'Database ni define cheyadaniki, create cheyadaniki, maintain cheyadaniki use ayye software idi.',
          why: 'Pata File systems lo unna issues (data repeat avvadam, mismatch avvadam) ni solve cheyadaniki.',
          example: 'Oracle, MySQL, SQL Server. (Excel kaadu - Excel oka spreadsheet matrame).',
          revisionHook: 'DBMS = Software Manager'
        }
      },
      {
        id: 't1-1',
        title: 'Data Abstraction & Independence',
        definition: 'This is the art of hiding the complicated stuff. The system shows you a simple interface (like a car dashboard) while hiding the messy wires and gears (the engine) underneath.',
        why: 'It gives us freedom! We can upgrade the hard drives or change how data is stored behind the scenes without breaking the apps that people use every day.',
        example: 'When you drive a car, you use the steering wheel (View Level). You don’t need to know how the fuel injection works (Physical Level) to get to work.',
        belAngle: {
          questionStyle: 'Which level of abstraction describes HOW data is stored?',
          answer: 'Physical Level (Lowest Level).',
          confusion: 'Logical is WHAT data we store. Physical is HOW we store it (bytes/magnetic spots).',
        },
        revisionHook: 'Physical = Hard Disk | Logical = Structure | View = User Access',
        animationType: 'abstraction',
        slug: 'data-abstraction-independence',
        telugu: {
          title: 'Data Abstraction mariyu Independence',
          definition: 'Lopala unna complex details ni dachipetti, user ki kavalsina mukhyamaina info ni matrame chupinchadam.',
          why: 'Lopala storage lo emanna marchina, user apps disturb avvakunda undadaniki.',
          example: 'Car Dashboard (View) mariyu Engine (Physical). Engine ela pani chestundo teliyakunda car nadipochu.',
          revisionHook: 'Physical = Hard Disk | Logical = Structure | View = User Access'
        }
      },
      {
        id: 't1-2',
        title: 'Schema vs Instance',
        definition: 'A Schema is the blueprint or the plan—it rarely changes. An Instance is the actual snapshot of data at this very moment—it changes all the time.',
        why: 'You need a solid plan (Schema) before you build, but the contents (Instance) will grow and shrink every day.',
        example: 'Think of a classroom. The empty seats and the rule "30 students max" is the Schema. The actual kids sitting there right now is the Instance.',
        belAngle: {
          questionStyle: 'The collection of information stored in a database at a particular moment is called?',
          answer: 'Instance.',
          confusion: 'Schema = The Skeleton (Static). Instance = The Flesh/Data (Dynamic).',
        },
        revisionHook: 'Schema = Blueprint (Fixed) | Instance = Snapshot (Changing)',
        animationType: 'schema_instance',
        slug: 'schema-vs-instance',
        telugu: {
          title: 'Schema mariyu Instance',
          definition: 'Schema ante design (blueprint). Instance ante aa time lo unna data (snapshot).',
          why: 'Design epudo okasari marutundi kani data eppudu marutu untundi.',
          example: 'Schema = "Student(Peru, Age)". Instance = "Row 1: Alice, 22".',
          revisionHook: 'Schema = Blueprint | Instance = Snapshot'
        }
      }
    ]
  },
  {
    id: 'm2',
    title: 'Module 2: Keys',
    priority: 1,
    topics: [
      {
        id: 't2-1',
        title: 'Primary & Foreign Keys',
        definition: 'A Primary Key (PK) is your unique ID card—it identifies YOU specifically and can never be blank. A Foreign Key (FK) is a reference to someone else\'s ID card to create a relationship.',
        why: 'Without keys, data is just a messy pile of text. PKs stop duplicates (so we don\'t have two "John Smiths"), and FKs link tables together (so we know which student belongs to which class).',
        example: 'Your Student ID (PK) identifies you. When you enroll in a course, the Course List writes down your Student ID (FK) to link you to that class.',
        belAngle: {
          questionStyle: 'A key that creates a relationship between two tables is called?',
          answer: 'Foreign Key.',
          confusion: 'A Primary Key identifies a row in ITS OWN table. A Foreign Key points to ANOTHER table.',
        },
        revisionHook: 'PK = Unique ID | FK = The Link',
        animationType: 'keys',
        slug: 'primary-foreign-keys',
        telugu: {
          title: 'Primary mariyu Foreign Keys',
          definition: 'Primary Key (PK) ante okka row ni unique ga identify chesedhi, idhi eppudu empty (NULL) ga undadhu. Foreign Key (FK) ante oka table lo unna column vere table lo unna PK ni match chestundhi.',
          why: 'Data repeat avvakunda undataniki PK, rendu tables madhya sambhandam (relationship) correct ga undataniki FK vadathamu.',
          example: 'College lo Student ID PK avthundhi, Class table lo unna Student ID FK avthundhi.',
          revisionHook: 'PK = Unique + Not Null | FK = Vere table tho link'
        }
      },
      {
        id: 't2-2',
        title: 'Super Key vs Candidate Key',
        definition: 'A Super Key is ANY combination that makes a row unique (even if it has extra, useless columns). A Candidate Key is the "Perfect Minimal" set—it has no extra fat.',
        why: 'Efficiency! We want to identify records using the least amount of data possible. Why use "ID + Phone + Shoe Size" when just "ID" works?',
        example: 'If "ID" is unique, then {ID, Name, Email} is a Super Key (it works, but "Name" is extra). {ID} is the Candidate Key (it\'s perfect and minimal).',
        belAngle: {
          questionStyle: 'A minimal super key is known as?',
          answer: 'Candidate Key.',
          confusion: 'Every Candidate Key is a Super Key. But not every Super Key is a Candidate Key (because Super Keys can have junk/extra columns).',
        },
        revisionHook: 'Candidate = Minimal Super Key',
        animationType: 'super_candidate_keys',
        slug: 'super-key-candidate-key',
        telugu: {
          title: 'Super Key mariyu Candidate Key',
          definition: 'Super Key ante row ni identify chese eh group of columns ayina. Candidate Key ante anitikante chinna Super Key (Minimal set).',
          why: 'Database fast ga pani cheyali ante manaki chinna ID kavali, anduke Candidate keys vetukuthamu.',
          example: '{ID, Name} Super Key avvochu, kani {ID} matrame Candidate Key avthundhi endukante idhi anitikante chinnadhi.',
          revisionHook: 'Candidate = Chinna/Minimal Super Key'
        }
      }
    ]
  },
  {
    id: 'm3',
    title: 'Module 3: ER Model (Detailed)',
    priority: 1,
    topics: [
      {
        id: 't3-1',
        title: 'ER Symbols & Attributes',
        definition: 'ER (Entity-Relationship) Diagrams are like the architectural blueprints for a database. We draw Rectangles for things (Entities), Ovals for details (Attributes), and Diamonds for actions (Relationships).',
        why: 'You wouldn\'t build a house without a drawing first, right? Same for databases. We map it out visually before writing a single line of code.',
        example: 'A Rectangle labeled "Student" has Ovals connected to it like "Name", "Age", and "Marks".',
        belAngle: {
          questionStyle: 'In an ER diagram, an attribute that can be divided into sub-parts is called?',
          answer: 'Composite Attribute.',
          confusion: 'Don\'t confuse Composite (parts of one thing) with Multivalued (many different things like numbers).',
        },
        revisionHook: 'Rect=Thing | Oval=Detail | Diamond=Action',
        animationType: 'er',
        slug: 'er-symbols-attributes',
      },
      {
        id: 't3-2',
        title: 'Advanced Attributes',
        definition: 'Sometimes data is special. A Derived Attribute (Dashed Oval) is calculated math (like Age). A Multi-valued Attribute (Double Oval) is a list (like Phone Numbers).',
        why: 'Real life is complex! People have multiple phone numbers, and everyone gets older every year. Our diagram needs special symbols to handle these changing facts.',
        example: 'We don\'t store "Age" because it changes. We store "Birth Date" and calculate Age (Derived). For phones, we might have Home, Mobile, and Work (Multi-valued).',
        belAngle: {
          questionStyle: 'A dashed ellipse represents which type of attribute?',
          answer: 'Derived Attribute.',
          confusion: 'Double Oval = Multi-valued (Many items). Dashed Oval = Derived (Calculated item).',
        },
        revisionHook: 'Dashed = Calculated | Double = List',
        animationType: 'er',
        slug: 'advanced-attributes',
      },
      {
        id: 't3-3',
        title: 'Relationships & Weak Entities',
        definition: 'A Weak Entity (Double Rectangle) is like a dependent child—it cannot exist efficiently without a parent (Strong Entity). It needs the parent\'s key to be identified.',
        why: 'Imagine a "Transaction" record. It makes no sense without the "Bank Account" it belongs to. If the Account is deleted, the Transaction loses its meaning.',
        example: 'An "Employee" is a Strong Entity. Their "Dependent" (family member for insurance) is a Weak Entity—they are only in the system because of the Employee.',
        belAngle: {
          questionStyle: 'The relationship between a strong and a weak entity is denoted by?',
          answer: 'Double Diamond (Identifying Relationship).',
          confusion: 'Weak entities don\'t have a Primary Key. They only have a "Partial Key" (dashed underline) and rely on the Strong entity.',
        },
        revisionHook: 'Double Rect = Weak (Needs Parent)',
        animationType: 'er',
        slug: 'relationships-weak-entities',
      }
    ]
  },
  {
    id: 'm4',
    title: 'Module 4: Normalization (Simplified)',
    priority: 1,
    topics: [
      {
        id: 't4-1',
        title: '1NF (Atomicity)',
        definition: 'The Golden Rule of 1NF: "One Single Value Per Cell." No comma-separated lists, no arrays, no stuffing multiple things into one box.',
        why: 'If you store "Math, Science" in one cell, the computer can\'t count them, sort them, or filter them easily. It\'s like glueing two pages of a book together.',
        example: 'Bad: [Name: Jon, Subjects: "Math, Science"]. Good: Split it into two rows -> [Jon, Math] and [Jon, Science].',
        belAngle: {
          questionStyle: 'If an attribute contains multiple values (comma separated), which normal form is violated?',
          answer: '1NF.',
          confusion: '1NF is purely about structure/atomicity. If you see commas in a cell, it\'s NOT 1NF.',
        },
        revisionHook: '1NF = One Value Only',
        animationType: 'norm_1nf',
        slug: '1nf-atomicity',
      },
      {
        id: 't4-2',
        title: '2NF (No Half-Key Dependency)',
        definition: '2NF says: "Don\'t rely on just HALF of the key." If your ID is a combo (like StudentID + CourseID), then every other column must relate to BOTH parts, not just one.',
        why: 'It prevents weird redundancies. Why repeat the Teacher\'s Name for every single student? The Teacher belongs to the Course, not the Student-Course pair.',
        example: 'If Key = (Student, Course). "Grade" is okay (depends on both). "Teacher Name" is bad (depends only on Course). Move Teacher to a separate Course table.',
        belAngle: {
          questionStyle: '2NF removes which type of dependency?',
          answer: 'Partial Dependency.',
          confusion: 'This ONLY happens if you have a Composite Key (key made of 2+ cols). If your key is just ID, you are automatically in 2NF.',
        },
        revisionHook: '2NF = whole Key, Not Just a Piece',
        animationType: 'norm_2nf',
        slug: '2nf-partial-dependency',
      },
      {
        id: 't4-3',
        title: '3NF (No Chain Reactions)',
        definition: '3NF is the "No Messenger" rules. Direct relationships only! If A determines B, and B determines C, then A should not be talking to C directly via B.',
        why: 'This stops daisy-chains of data. If you change a generic Zip Code\'s city, you shouldn\'t have to update it in 5,000 student records.',
        example: 'Student -> Zip Code -> City. This is a chain. Break it! Table 1: (Student, Zip). Table 2: (Zip, City). Now, City is stored only once per Zip.',
        belAngle: {
          questionStyle: 'Transitive dependency must be eliminated for which Normal Form?',
          answer: '3NF.',
          confusion: '2NF removes Partial (Key->Attr chains). 3NF removes Transitive (Attr->Attr chains).',
        },
        revisionHook: '3NF = No A->B->C Chains',
        animationType: 'norm_3nf',
        slug: '3nf-transitive-dependency',
      },
      {
        id: 't4-4',
        title: 'BCNF (Strong 3NF)',
        definition: 'BCNF is just a stricter, bossier version of 3NF. It says: "If you want to determine anything, you MUST be a candidate key." No ordinary column gets to dictate values.',
        why: 'Sometimes 3NF misses rare edge cases where a regular column controls a prime key. BCNF cleans up those last few anomalies.',
        example: 'Imagine a "Professor" column determining the "Subject". If Professor isn\'t a unique Key, this table violates BCNF. Make Professor a key in their own table!',
        belAngle: {
          questionStyle: 'BCNF is strictly stronger than?',
          answer: '3NF.',
          confusion: 'Every table in BCNF is in 3NF. But a table in 3NF might NOT be in BCNF.',
        },
        revisionHook: 'BCNF = Boss Must Be A Key',
        animationType: 'norm_bcnf',
        slug: 'bcnf-strong-3nf',
      },
      {
        id: 't4-5',
        title: '4NF (No Multi-Valued Facts)',
        definition: '4NF handles the problem of "Independent Lists". You cannot store two unrelated lists (like your Hobbies and your Children) in the same table row.',
        why: 'It creates a huge multiplication mess. If you have 3 hobbies and 3 children, the database has to create 9 rows just to list them all. It\'s wasteful.',
        example: 'Jon plays Cricket & Chess. Jon has kids Tom & Jerry. Don\'t mix them. Create a "Hobbies Table" and a "Children Table".',
        belAngle: {
          questionStyle: '4NF deals with which type of dependency?',
          answer: 'Multi-valued Dependency (MVD).',
          confusion: 'MVD is when A ->> B and A ->> C, but B and C have nothing to do with each other.',
        },
        revisionHook: '4NF = Separate Your Lists',
        animationType: 'norm_4nf',
        slug: '4nf-multi-valued-dependency',
      },
      {
        id: 't4-6',
        title: '5NF (Project-Join)',
        definition: '5NF is the "Humpty Dumpty" rule. Sometimes, if you break a table into 2 pieces, you can\'t put it back together perfectly. You might need to break it into 3 pieces to make it work.',
        why: 'It handles very complex 3-way relationships that can\'t be simplified into pairs without losing critical connection info.',
        example: 'A Dealer sells a Product for a specific Company. You cannot just say "Dealer sells Product" and "Dealer works for Company" without losing the specific 3-way deal.',
        belAngle: {
          questionStyle: '5NF is concerned with?',
          answer: 'Join Dependency (JD).',
          confusion: 'It ensures lossless decomposition of complex relationships.',
        },
        revisionHook: '5NF = Perfect 3-Way Fit',
        animationType: 'norm_5nf',
        slug: '5nf-project-join',
      }
    ]
  },
  {
    id: 'm5',
    title: 'Module 5: Transactions',
    priority: 2,
    topics: [
      {
        id: 't5-1',
        title: 'ACID Properties',
        definition: 'ACID is the safety contract of databases. Atomicity, Consistency, Isolation, Durability. It guarantees that your data doesn\'t get corrupted, even if the power fails.',
        why: 'Imagine sending money. You want the money to leave your account AND arrive at the other side. You don\'t want it to vanish in mid-air if the server crashes.',
        example: 'Bank Transfer: "Debit A, Credit B". Atomicity says: Do BOTH, or do NEITHER. No halfway states allowed.',
        belAngle: {
          questionStyle: 'Which property ensures "all or nothing"?',
          answer: 'Atomicity.',
          confusion: 'Durability saves it forever. Atomicity ensures the steps are treated as one unit.',
        },
        revisionHook: 'A=All/Nothing | C=Rules | I=Privacy | D=Permanent',
        animationType: 'acid',
        slug: 'acid-properties',
      },
      {
        id: 't5-2',
        title: 'Transaction States',
        definition: 'A transaction goes through a lifecycle: Active (Working) -> Partially Committed (Done but not saved) -> Committed (Saved Forever). Or it Fails -> Aborts (Undoes everything).',
        why: 'We need to track exactly where we are so we know whether to "Rollback" (undo) or "Commit" (save) if something goes wrong.',
        example: 'It\'s like online shopping. Adding to cart (Active) -> Checkout (Partial) -> Payment Success (Committed). If card declines -> Cancel Order (Aborted).',
        belAngle: {
          questionStyle: 'A transaction reaches which state after the final statement has been executed?',
          answer: 'Partially Committed.',
          confusion: 'It is ONLY "Committed" after the data is physically written to the hard disk safely.',
        },
        revisionHook: 'Active -> Partial -> Committed',
        animationType: 'acid',
        slug: 'transaction-states',
      }
    ]
  },
  {
    id: 'm6',
    title: 'Module 6: SQL Basics',
    priority: 2,
    topics: [
      {
        id: 't6-1',
        title: 'Select, Where, Order By',
        definition: 'These are your bread-and-butter commands. SELECT picks columns, WHERE filters rows, and ORDER BY sorts the final list.',
        why: 'Data is useless if you can\'t find what you need. These commands let you ask smart questions like "Show me all high-scoring students, sorted by rank."',
        example: 'SELECT Name FROM Students WHERE Age > 18 ORDER BY Grade;',
        belAngle: {
          questionStyle: 'Which clause is used to sort the result?',
          answer: 'ORDER BY.',
          confusion: 'WHERE is for filtering (removing rows). ORDER BY is for arranging (sorting rows).',
        },
        revisionHook: 'SELECT cols FROM table WHERE criteria',
        animationType: 'sql',
        slug: 'sql-select-where',
      },
      {
        id: 't6-2',
        title: 'Group By vs Having',
        definition: 'GROUP BY mashes rows together into buckets (like "Department"). HAVING allows you to filter those buckets *after* they are formed.',
        why: 'You can\'t check an average before you calculate it! That\'s why we need HAVING—it works on the summary data, while WHERE works on raw data.',
        example: 'First `GROUP BY Department` to find average salary. Then `HAVING AVG(Salary) > 5000` to show only rich departments.',
        belAngle: {
          questionStyle: 'Can we use WHERE with aggregate functions (like SUM, AVG)?',
          answer: 'No, use HAVING instead.',
          confusion: 'WHERE filters individual students. HAVING filters whole classes.',
        },
        revisionHook: 'WHERE = Rows | HAVING = Groups',
        animationType: 'sql',
        slug: 'group-by-having',
      }
    ]
  },
  {
    id: 'm7',
    title: 'Module 7: Joins',
    priority: 2,
    topics: [
      {
        id: 't7-1',
        title: 'Inner, Left, Right, Full Joins',
        definition: 'Joins are how we stitch tables back together. Inner Join finds matches. Left Join keeps everyone from the left (even without a match). Full Join keeps absolutely everyone.',
        why: 'Data is split into pieces to save space. Joins let us recombine them dynamically only when we need to see the full picture.',
        example: 'Inner Join: Show me students WITH a library card. Left Join: Show me ALL students, even those who haven\'t borrowed a book yet.',
        belAngle: {
          questionStyle: 'Which join returns all rows from both tables, filling NULLs where there is no match?',
          answer: 'Full Outer Join.',
          confusion: 'Left Join keeps ALL Left rows. Right Join keeps ALL Right rows. Full Join keeps BOTH.',
        },
        revisionHook: 'Inner=Match | Left=All Left | Full=Everyone',
        animationType: 'joins',
        slug: 'joins-types',
      }
    ]
  },
  {
    id: 'm8',
    title: 'Module 8: Indexing',
    priority: 3,
    topics: [
      {
        id: 't8-1',
        title: 'Clustered vs Non-Clustered',
        definition: 'An Index is a shortcut for finding data. A Clustered Index rearranges the actual book (sorted pages). A Non-Clustered Index is just a reference list at the back of the book.',
        why: 'Without an index, the database has to scan every single row (Full Table Scan) to find "Alice." With an index, it jumps straight to "A".',
        example: 'Clustered = The dictionary itself (words are sorted A-Z). Non-Clustered = The index page in a Textbook (Topic Name -> Page 24).',
        belAngle: {
          questionStyle: 'How many clustered indexes can a table have?',
          answer: 'Only One (because data can be physically sorted in only one way).',
          confusion: 'A table can have many non-clustered indexes.',
        },
        revisionHook: 'Clustered = 1 (Physical) | Non-Clustered = Many (Logical)',
        animationType: 'indexing',
        slug: 'indexing-clustered-non-clustered',
      }
    ]
  },
  {
    id: 'm9',
    title: 'Module 9: DB Languages',
    priority: 3,
    topics: [
      {
        id: 't9-1',
        title: 'DDL, DML, DCL, TCL',
        definition: 'SQL commands come in flavors. DDL builds the structure (Tables). DML manages the content (Data). DCL handles security (Passwords). TCL manages safety (Commits).',
        why: 'It helps to know intent. If you use DDL, you are changing the ARCHITECTURE. If you use DML, you are changing the RECORDS.',
        example: 'DDL = "Build a Garage" (CREATE). DML = "Park the Car" (INSERT). DCL = "Give Keys" (GRANT). TCL = "Save Game" (COMMIT).',
        belAngle: {
          questionStyle: 'TRUNCATE is which type of command?',
          answer: 'DDL (Data Definition Language).',
          confusion: 'TRUNCATE looks like a delete, but it resets the table structure internally, so it is DDL. DELETE is DML.',
        },
        revisionHook: 'DDL=Structure | DML=Data | DCL=Permissions | TCL=Savepoints',
        animationType: 'languages',
        slug: 'db-languages-ddl-dml',
      }
    ]
  },
  {
    id: 'm10',
    title: 'Module 10: Triggers',
    priority: 3,
    topics: [
      {
        id: 't10-1',
        title: 'Triggers & Cursors',
        definition: 'A Trigger is a "magic trap" that waits for an event. When you Insert, Update, or Delete, it springs into action automatically without you asking.',
        why: 'Great for automation! You don\'t want to trust users to remember to log changes. The database does it for you in the background.',
        example: 'If someone deletes a "Student", the Trigger automatically copies their file to a "Deleted Students Archive" for safety.',
        belAngle: {
          questionStyle: 'A special kind of stored procedure that executes automatically is?',
          answer: 'Trigger.',
          confusion: 'Procedures must be called explicitly (EXEC). Triggers fire implicitly (Auto).',
        },
        revisionHook: 'Trigger = Automatic Auto-Pilot',
        animationType: 'triggers',
        slug: 'triggers-cursors',
      }
    ]
  }
];

export const FLASHCARDS: FlashCard[] = [
  { category: 'Basics', front: 'Data Independence', back: 'Ability to modify schema at one level without changing the level above it.' },
  { category: 'ACID', front: 'Atomicity', back: 'All or Nothing. Transaction happens completely or not at all.' },
  { category: 'ACID', front: 'Durability', back: 'Committed data is saved permanently, even after power loss.' },
  { category: 'Keys', front: 'Candidate Key', back: 'Minimal super key. Can become Primary Key.' },
  { category: 'Keys', front: 'Foreign Key', back: 'Maintains referential integrity between two tables.' },
  { category: 'ER Model', front: 'Weak Entity', back: 'Entity with no PK. Represented by Double Rectangle.' },
  { category: 'ER Model', front: 'Derived Attribute', back: 'Calculated from another attribute. Dashed Oval.' },
  { category: 'Normal Forms', front: '1NF', back: 'Atomic Values only (No lists in cells).' },
  { category: 'Normal Forms', front: '2NF', back: '1NF + No Partial Dependency.' },
  { category: 'Normal Forms', front: '3NF', back: '2NF + No Transitive Dependency.' },
  { category: 'Normal Forms', front: 'BCNF', back: '3NF + LHS of every dependency is a Super Key.' },
  { category: 'Normal Forms', front: '4NF', back: 'BCNF + No Multi-valued Dependencies (Independent Lists).' },
  { category: 'Normal Forms', front: '5NF', back: '4NF + No Join Dependency (Lossless 3-way split).' },
  { category: 'Joins', front: 'Left Outer Join', back: 'Returns ALL rows from Left table + Matches from Right.' },
  { category: 'Languages', front: 'DDL', back: 'Create, Alter, Drop, Truncate (Structure).' },
  { category: 'Triggers', front: 'Trigger', back: 'Code that runs automatically on Insert/Update/Delete.' },
];