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
        definition: 'Software that defines, creates, maintains, and controls access to the database.',
        why: 'To solve the problems of traditional File Processing Systems (Redundancy, Inconsistency).',
        example: 'Oracle, MySQL, SQL Server. (NOT Excel - Excel is a spreadsheet, not a DBMS).',
        belAngle: {
          questionStyle: 'Which of the following is NOT a function of DBMS?',
          answer: 'Designing the operating system (It manages data, not the OS).',
          confusion: 'Database vs DBMS. Database is the data; DBMS is the software.',
        },
        revisionHook: 'DBMS = The Software Manager',
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
        definition: 'Hiding complex implementation details from users and showing only essential features.',
        why: 'To allow changes in storage/structure without affecting user programs.',
        example: 'Car Dashboard (View) vs Engine (Physical). You drive without knowing how the engine burns fuel.',
        belAngle: {
          questionStyle: 'Which level of abstraction describes HOW data is stored?',
          answer: 'Physical Level (Lowest Level).',
          confusion: 'Students confuse Logical (What data) with Physical (How data).',
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
        definition: 'Schema is the logical design (blueprint). Instance is the data at a specific moment (snapshot).',
        why: 'The structure (Schema) rarely changes, but data (Instance) changes frequently.',
        example: 'Schema = "Student(Name, Age)". Instance = "Row 1: Alice, 22".',
        belAngle: {
          questionStyle: 'The collection of information stored in a database at a particular moment is called?',
          answer: 'Instance.',
          confusion: 'Schema is static; Instance is dynamic.',
        },
        revisionHook: 'Schema = Blueprint (Static) | Instance = Snapshot (Dynamic)',
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
        definition: 'Primary Key (PK) is a unique identifier for a record that CANNOT be NULL. Foreign Key (FK) is a field in one table that refers to the PK in another table.',
        why: 'PK ensures Entity Integrity (no duplicate rows). FK ensures Referential Integrity (relationships are valid). Without keys, data becomes a giant, unsearchable mess.',
        example: 'In a University database: Student_ID is the PK. In the Course_Enrollment table, Student_ID is the FK linking back to the Student table.',
        belAngle: {
          questionStyle: 'A key that creates a relationship between two tables is called?',
          answer: 'Foreign Key.',
          confusion: 'Foreign Keys can contain NULL values (unless specified), Primary Keys cannot.',
        },
        revisionHook: 'PK = Unique + Not Null | FK = Link to other table',
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
        definition: 'A Super Key is any set of one or more columns that can uniquely identify a row. A Candidate Key is a MINIMAL Super Key—meaning if you remove any column from it, it is no longer unique.',
        why: 'Efficiency. We want the shortest possible identifier to serve as the Primary Key. Every Candidate Key is a Super Key, but not every Super Key is a Candidate Key.',
        example: 'Set {ID, Name, Email} is a Super Key. Set {ID} is a Candidate Key because it is the smallest unique set. If we remove ID, {Name, Email} might not be unique (two people can have same name).',
        belAngle: {
          questionStyle: 'A minimal super key is known as?',
          answer: 'Candidate Key.',
          confusion: 'All Candidate Keys are Super Keys, but not all Super Keys are Candidate Keys.',
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
        definition: 'A conceptual model used to design databases. Key symbols: Rectangle (Entity), Oval (Attribute), Diamond (Relation).',
        why: 'We need a visual blueprint before writing code (DDL).',
        example: 'Student (Entity) has Name (Attribute). ID is underlined (Key Attribute).',
        belAngle: {
          questionStyle: 'In an ER diagram, an attribute that can be divided into sub-parts is called?',
          answer: 'Composite Attribute.',
          confusion: 'Composite (Name -> First, Last) vs Multivalued (Phone -> Mobile, Home).',
        },
        revisionHook: 'Rect=Entity | Oval=Attr | Underline=Key',
        animationType: 'er',
        slug: 'er-symbols-attributes',
      },
      {
        id: 't3-2',
        title: 'Advanced Attributes',
        definition: 'Derived (Dashed Oval): Calculated from others. Multi-valued (Double Oval): Has multiple values.',
        why: 'To represent complex data like "Age" (changes every year) or "Phone Numbers" (many per person).',
        example: 'Age is derived from DOB. Emails are multi-valued.',
        belAngle: {
          questionStyle: 'A dashed ellipse represents which type of attribute?',
          answer: 'Derived Attribute.',
          confusion: 'Double Oval (Multi-valued) vs Dashed Oval (Derived).',
        },
        revisionHook: 'Dashed = Derived (Age) | Double = Multi (Phones)',
        animationType: 'er',
        slug: 'advanced-attributes',
      },
      {
        id: 't3-3',
        title: 'Relationships & Weak Entities',
        definition: 'Relationships (Diamond) link entities. Weak Entities (Double Rect) need a strong entity to exist.',
        why: 'A "Dependent" cannot exist without an "Employee".',
        example: 'Employee --(Has)-- Dependent. Dependent is Weak.',
        belAngle: {
          questionStyle: 'The relationship between a strong and a weak entity is denoted by?',
          answer: 'Double Diamond (Identifying Relationship).',
          confusion: 'Weak entities have a Partial Key (dashed underline), not a Primary Key.',
        },
        revisionHook: 'Double Rect = Weak | Double Diamond = Strong-Weak Link',
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
        definition: 'One Value Per Cell. No lists, no arrays, no commas.',
        why: 'The computer gets confused if you put "Math, Science" in one box. It can\'t count or sort them easily.',
        example: 'Bad: [Jon, "Math", "Science"]. Good: [Jon, "Math"], [Jon, "Science"].',
        belAngle: {
          questionStyle: 'If an attribute contains multiple values (comma separated), which normal form is violated?',
          answer: '1NF.',
          confusion: '1NF is about Structure/Atomicity.',
        },
        revisionHook: '1NF = One Value Per Cell',
        animationType: 'norm_1nf',
        slug: '1nf-atomicity',
      },
      {
        id: 't4-2',
        title: '2NF (No Half-Key Dependency)',
        definition: 'The "Whole Key" Rule. If your ID is made of two parts (e.g., StudentID + SubjectID), everything in the row must relate to BOTH parts.',
        why: 'Don\'t put the "Teacher Name" next to the Student grade. The Teacher relates to the Subject, not the Student.',
        example: 'If Key = (Student, Subject), "Grade" is okay (depends on both). "Teacher" is bad (depends only on Subject).',
        belAngle: {
          questionStyle: '2NF removes which type of dependency?',
          answer: 'Partial Dependency.',
          confusion: 'Partial Dependency ONLY happens with Composite Keys (2+ columns as key).',
        },
        revisionHook: '2NF = Whole Key, Not Just a Piece',
        animationType: 'norm_2nf',
        slug: '2nf-partial-dependency',
      },
      {
        id: 't4-3',
        title: '3NF (No Chain Reactions)',
        definition: 'No "Friend of a Friend" Dependency. A -> B -> C. If A implies B, and B implies C, then move C to a new table.',
        why: 'If you store "City" based on "Zip Code" inside the "Student Table", you duplicate the city name 1000 times.',
        example: 'Student -> Zip -> City. Break it: Table 1 (Student, Zip). Table 2 (Zip, City).',
        belAngle: {
          questionStyle: 'Transitive dependency must be eliminated for which Normal Form?',
          answer: '3NF.',
          confusion: '2NF removes Partial (Key->Attr). 3NF removes Transitive (Attr->Attr).',
        },
        revisionHook: '3NF = No A->B->C Chains',
        animationType: 'norm_3nf',
        slug: '3nf-transitive-dependency',
      },
      {
        id: 't4-4',
        title: 'BCNF (Strong 3NF)',
        definition: 'The "Boss" Rule. The column that determines other data (the boss) MUST be a Candidate Key.',
        why: 'In rare cases, 3NF misses a problem where a non-key attribute controls a key attribute.',
        example: 'If "Professor" determines "Subject", but "Professor" isn\'t a unique key, you have a BCNF violation.',
        belAngle: {
          questionStyle: 'BCNF is strictly stronger than?',
          answer: '3NF.',
          confusion: 'Every BCNF is 3NF, but not every 3NF is BCNF.',
        },
        revisionHook: 'BCNF = LHS Must Be A Key',
        animationType: 'norm_bcnf',
        slug: 'bcnf-strong-3nf',
      },
      {
        id: 't4-5',
        title: '4NF (No Multi-Valued Facts)',
        definition: 'No "Unrelated Lists" in one table. You cannot store two independent lists (like Hobbies and Subjects) in the same table.',
        why: 'It creates a "Cartesian Product" explosion. If Jon has 3 subjects and 3 hobbies, you need 9 rows to show them.',
        example: 'Jon plays Cricket & Chess. Jon studies Math & Science. Do not mix these rows. Make two separate tables.',
        belAngle: {
          questionStyle: '4NF deals with which type of dependency?',
          answer: 'Multi-valued Dependency (MVD).',
          confusion: 'MVD is about independent lists (A->>B | A->>C).',
        },
        revisionHook: '4NF = Separate Independent Lists',
        animationType: 'norm_4nf',
        slug: '4nf-multi-valued-dependency',
      },
      {
        id: 't4-6',
        title: '5NF (Project-Join)',
        definition: 'The "Jigsaw Puzzle" Rule. Sometimes breaking a table into 2 pieces loses information. You need 3 pieces to reconstruct it perfectly.',
        why: 'To handle complex 3-way cyclic relationships (e.g., Agent, Product, Company).',
        example: 'If an Agent sells a Product for a specific Company, you can\'t just split it into pairs without losing the specific 3-way link.',
        belAngle: {
          questionStyle: '5NF is concerned with?',
          answer: 'Join Dependency (JD).',
          confusion: 'It ensures lossless decomposition of complex relationships.',
        },
        revisionHook: '5NF = 3-Way Puzzle Fit',
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
        definition: 'Atomicity, Consistency, Isolation, Durability.',
        why: 'Ensures reliability.',
        example: 'Bank transfer: Debit A AND Credit B must both happen, or neither.',
        belAngle: {
          questionStyle: 'Which property ensures "all or nothing"?',
          answer: 'Atomicity.',
          confusion: 'Isolation is about concurrency (multiple users).',
        },
        revisionHook: 'A=All/Nothing | C=Valid | I=Independent | D=Saved',
        animationType: 'acid',
        slug: 'acid-properties',
      },
      {
        id: 't5-2',
        title: 'Transaction States',
        definition: 'Active -> Partially Committed -> Committed (or Failed -> Aborted).',
        why: 'To track the progress and outcome of a transaction.',
        example: 'Once "Committed", you cannot rollback.',
        belAngle: {
          questionStyle: 'A transaction reaches which state after the final statement has been executed?',
          answer: 'Partially Committed.',
          confusion: 'It is only "Committed" after the system writes checks to disk.',
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
        definition: 'Basic clauses to retrieve and sort data.',
        why: 'To extract specific information.',
        example: 'SELECT Name FROM Students WHERE Age > 20 ORDER BY Name;',
        belAngle: {
          questionStyle: 'Which clause is used to sort the result?',
          answer: 'ORDER BY.',
          confusion: 'WHERE filters rows; it does not sort.',
        },
        revisionHook: 'SELECT columns FROM table WHERE condition',
        animationType: 'sql',
        slug: 'sql-select-where',
      },
      {
        id: 't6-2',
        title: 'Group By vs Having',
        definition: 'GROUP BY aggregates rows. HAVING filters the groups.',
        why: 'WHERE cannot work on aggregate functions (like COUNT, AVG).',
        example: 'SELECT Dept, AVG(Sal) FROM Emp GROUP BY Dept HAVING AVG(Sal) > 5000;',
        belAngle: {
          questionStyle: 'Can we use WHERE with aggregate functions?',
          answer: 'No, use HAVING instead.',
          confusion: 'WHERE filters before grouping. HAVING filters after grouping.',
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
        definition: 'Combines rows from two or more tables based on a related column between them.',
        why: 'To view related data stored in separate tables (e.g., getting a Department Name for an Employee).',
        example: 'Merging "Employees" list with "Departments" list.',
        belAngle: {
          questionStyle: 'Which join returns all rows from both tables?',
          answer: 'Full Outer Join.',
          confusion: 'Left Join keeps ALL Left rows, even if there is no match in Right (result is NULL).',
        },
        revisionHook: 'Inner=Match | Left=All Left | Full=Everything',
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
        definition: 'Indexing optimizes search. Clustered = Physical Sort. Non-Clustered = Logical Pointer.',
        why: 'Scanning 1 million rows is slow. Indices make it instant.',
        example: 'Clustered = Dictionary (words are sorted). Non-Clustered = Book Index at the back.',
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
        definition: 'Categories of SQL commands.',
        why: 'Separates structure management from data manipulation.',
        example: 'DDL: CREATE. DML: INSERT. DCL: GRANT. TCL: COMMIT.',
        belAngle: {
          questionStyle: 'TRUNCATE is which type of command?',
          answer: 'DDL (Data Definition Language).',
          confusion: 'DELETE is DML. TRUNCATE is DDL (resets structure).',
        },
        revisionHook: 'DDL=Structure | DML=Data | DCL=Rights | TCL=Transaction',
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
        definition: 'A stored procedure that automatically executes when an event (INSERT, UPDATE, DELETE) occurs.',
        why: 'To maintain data integrity or create audit logs automatically.',
        example: 'When Salary is updated, automatically save the old salary in a "History" table.',
        belAngle: {
          questionStyle: 'A special kind of stored procedure that executes automatically is?',
          answer: 'Trigger.',
          confusion: 'Stored Procedures must be called manually. Triggers fire automatically.',
        },
        revisionHook: 'Trigger = Automatic Action-Reaction',
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