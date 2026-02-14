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
        },
        mcqs: [
          {
            id: 1,
            question: "What is the primary function of a DBMS?",
            options: ["To design operating systems", "To manage, store, and retrieve data efficiently", "To create graphical user interfaces"],
            correctIndex: 1,
            explanation: "DBMS is essentially a software that acts as an interface between the database and end users or application programs."
          },
          {
            id: 2,
            question: "Which of the following is NOT a DBMS example?",
            options: ["MySQL", "Oracle", "Microsoft Excel"],
            correctIndex: 2,
            explanation: "Excel is a spreadsheet software, not a full-fledged Database Management System."
          },
          {
            id: 3,
            question: "Why is DBMS preferred over File Systems?",
            options: ["It prevents data redundancy", "It is cheaper", "It is easier to install"],
            correctIndex: 0,
            explanation: "DBMS enforces rules to minimize duplicate data (redundancy) and inconsistency."
          }
        ]
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
        },
        mcqs: [
          {
            id: 4,
            question: "Which level of abstraction describes 'what' data is stored?",
            options: ["Physical Level", "Logical Level", "View Level"],
            correctIndex: 1,
            explanation: "Logical level defines the structure and constraints of data."
          },
          {
            id: 5,
            question: "Physical Data Independence means...",
            options: ["Changing the conceptual schema without changing the external schema", "Changing the physical storage without affecting the conceptual schema", "Changing the view level without changing the physical level"],
            correctIndex: 1,
            explanation: "You can change hard drives or file organizations without breaking the logical structure."
          },
          {
            id: 6,
            question: "The user interacts primarily with which level?",
            options: ["Physical Level", "Conceptual Level", "View Level"],
            correctIndex: 2,
            explanation: "The View Level is the external level tailored for end users."
          },
          {
            id: 7,
            question: "Hiding the complexity of implementation is called?",
            options: ["Data Abstraction", "Data Mining", "Data Science"],
            correctIndex: 0,
            explanation: "Abstraction hides the complex details of how data is stored."
          },
          {
            id: 8,
            question: "Logical Data Independence is generally...?",
            options: ["Easier to achieve than Physical", "Harder to achieve than Physical", "Impossible to achieve"],
            correctIndex: 1,
            explanation: "It is harder because changing the logical structure (tables/columns) usually requires application code changes."
          }
        ]
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
        },
        mcqs: [
          {
            id: 9,
            question: "Which of the following rarely changes?",
            options: ["Database Instance", "Database Schema", "Data Values"],
            correctIndex: 1,
            explanation: "Schema is the structural design (blueprint) which is static."
          },
          {
            id: 10,
            question: "The data in the database at a specific moment in time is called...?",
            options: ["Schema", "Instance", "Independence"],
            correctIndex: 1,
            explanation: "Instance is the snapshot of data at a particular instant."
          },
          {
            id: 11,
            question: "Variable declaration in programming is analogous to?",
            options: ["Instance", "Schema", "Query"],
            correctIndex: 1,
            explanation: "Defining 'int x' is the schema; 'x = 5' is the instance."
          }
        ]
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
        },
        mcqs: [
          {
            id: 12,
            question: "A Primary Key must be...?",
            options: ["Unique and Not Null", "Unique and Nullable", "Duplicate and Not Null"],
            correctIndex: 0,
            explanation: "Primary Key uniquely identifies a record, so it cannot be duplicate or empty."
          },
          {
            id: 13,
            question: "A Foreign Key is used to...?",
            options: ["Identify a record uniquely", "Establish a relationship between two tables", "Perform mathematical calculations"],
            correctIndex: 1,
            explanation: "Foreign Keys link data in one table to the data in another table."
          },
          {
            id: 14,
            question: "Can a Foreign Key contain NULL values?",
            options: ["Yes, always", "No, never", "Yes, unless it is part of a Primary Key"],
            correctIndex: 2,
            explanation: "Standard Foreign Keys can be NULL, meaning no relationship exists for that row."
          },
          {
            id: 15,
            question: "Which key acts as a reference in another table?",
            options: ["Primary Key", "Candidate Key", "Foreign Key"],
            correctIndex: 2,
            explanation: "It 'references' the Primary Key of another table."
          },
          {
            id: 16,
            question: "How many Primary Keys can a table have?",
            options: ["Only one", "As many as needed", "Two"],
            correctIndex: 0,
            explanation: "A table can have only one Primary Key (though it can be composite)."
          }
        ]
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
        },
        mcqs: [
          {
            id: 17,
            question: "A Candidate Key is...?",
            options: ["Any Super Key", "A Minimal Super Key", "A Maximal Super Key"],
            correctIndex: 1,
            explanation: "It is the smallest subset of a super key that can uniquely identify a tuple."
          },
          {
            id: 18,
            question: "Which statement is TRUE?",
            options: ["Every Super Key is a Candidate Key", "Every Candidate Key is a Super Key", "Every Primary Key is a Super Key but not a Candidate Key"],
            correctIndex: 1,
            explanation: "Candidate keys are special Super Keys (minimal ones). So all Candidate Keys are Super Keys."
          },
          {
            id: 19,
            question: "If {ID, Email} is a Super Key, and {ID} is also a Super Key, then...?",
            options: ["{ID, Email} is a Candidate Key", "{ID} is a Candidate Key", "Both are Candidate Keys"],
            correctIndex: 1,
            explanation: "{ID, Email} is not minimal because we can remove 'Email' and still identify the row."
          },
          {
            id: 20,
            question: "Can a table have multiple Candidate Keys?",
            options: ["Yes", "No", "Only if there is no Primary Key"],
            correctIndex: 0,
            explanation: "Yes, you can have multiple candidates (e.g., ID, Email, Phone), but you pick one as Primary."
          },
          {
            id: 21,
            question: "Are NULL values allowed in a Candidate Key?",
            options: ["Yes, depending on DBMS rules", "No, never", "Only one NULL allowed"],
            correctIndex: 0,
            explanation: "Generally, candidate keys should not be null, but standard definition is about uniqueness. PK is strictly Not Null."
          }
        ]
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
        mcqs: [
          {
            id: 22,
            question: "In an ER Diagram, a rectangle represents...?",
            options: ["Attribute", "Entity Set", "Relationship"],
            correctIndex: 1,
            explanation: "Rectangles are used for Entity Sets."
          },
          {
            id: 23,
            question: "Ellipses (Ovals) are used to represent...?",
            options: ["Entities", "Attributes", "Relationships"],
            correctIndex: 1,
            explanation: "Ellipses represent attributes (properties) of an entity."
          },
          {
            id: 24,
            question: "A Diamond shape represents...?",
            options: ["Relationship", "Weak Entity", "Multivalued Attribute"],
            correctIndex: 0,
            explanation: "Diamonds represent the relationship between entities."
          },
          {
            id: 25,
            question: "A Primary Key attribute is usually represented by...?",
            options: ["Dashed Ellipse", "Underlined Ellipse", "Double Ellipse"],
            correctIndex: 1,
            explanation: "Underlining the text inside the oval denotes a primary key."
          },
          {
            id: 26,
            question: "Which symbol represents a Weak Entity?",
            options: ["Double Rectangle", "Dashed Rectangle", "Double Diamond"],
            correctIndex: 0,
            explanation: "A double-bordered rectangle indicates a Weak Entity Set."
          }
        ]
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
        mcqs: [
          {
            id: 27,
            question: "An attribute that can have multiple values is shown by...?",
            options: ["Double Oval", "Dashed Oval", "Rectangle"],
            correctIndex: 0,
            explanation: "Double Oval = Multi-valued (like Phone numbers: [123, 456])."
          },
          {
            id: 28,
            question: "Attributes that are calculated from others are called...?",
            options: ["Derived Attributes", "Composite Attributes", "Simple Attributes"],
            correctIndex: 0,
            explanation: "Age is derived from DateOfBirth."
          },
          {
            id: 29,
            question: "Address (Street, City, Zip) is an example of...?",
            options: ["Composite Attribute", "Derived Attribute", "Multivalued Attribute"],
            correctIndex: 0,
            explanation: "Composite attributes can be divided into smaller sub-parts."
          }
        ]
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
        mcqs: [
          {
            id: 30,
            question: "A Weak Entity depends on...?",
            options: ["Its own Primary Key", "A Strong (Identifying) Entity", "A Foreign Key in another database"],
            correctIndex: 1,
            explanation: "It cannot exist without being linked to a Strong Entity."
          },
          {
            id: 31,
            question: "Does a Weak Entity have a Primary Key?",
            options: ["Yes", "No, it has a Partial Key", "No, it has no keys at all"],
            correctIndex: 1,
            explanation: "It has a discriminator (partial key) that works only in combination with the Strong Entity's key."
          },
          {
            id: 32,
            question: "The discriminator of a weak entity is represented by?",
            options: ["Solid Underline", "Dashed Underline", "No Underline"],
            correctIndex: 1,
            explanation: "Dashed underline indicates the partial key."
          },
          {
            id: 33,
            question: "The relationship linking a weak entity to its owner is called?",
            options: ["Identifying Relationship", "Weak Relationship", "Recursive Relationship"],
            correctIndex: 0,
            explanation: "It's often shown as a Double Diamond."
          },
          {
            id: 34,
            question: "If the Strong Entity is deleted, what happens to the Weak Entity?",
            options: ["It remains as orphan", "It is also deleted", "It becomes strong"],
            correctIndex: 1,
            explanation: "Since it existence-dependent, it usually gets deleted (Cascade Delete)."
          }
        ]
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
        mcqs: [
          {
            id: 35,
            question: "1NF requires that all attributes must contain...?",
            options: ["Atomic Values", "Lists of Values", "Composite Values"],
            correctIndex: 0,
            explanation: "Atomicity mean cannot be further divided."
          },
          {
            id: 36,
            question: "Which of these violations prevents a table from being in 1NF?",
            options: ["Repeating Groups/Arrays", "Partial Dependency", "Transitive Dependency"],
            correctIndex: 0,
            explanation: "Storing multiple values in a single cell (like 'Red, Blue') violates 1NF."
          },
          {
            id: 37,
            question: "To convert a table to 1NF, you should...?",
            options: ["Create a separate row for each value", "Delete the column", "Merge columns"],
            correctIndex: 0,
            explanation: "Flatten the data so every cell has strictly one value."
          }
        ]
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
        mcqs: [
          {
            id: 38,
            question: "A table is in 2NF if it is in 1NF and...?",
            options: ["No Partial Dependencies exist", "No Transitive Dependencies exist", "No Multi-valued Dependencies exist"],
            correctIndex: 0,
            explanation: "All non-key attributes must depend on the FULL Primary Key."
          },
          {
            id: 39,
            question: "Partial Dependency occurs when...?",
            options: ["A non-key attribute depends on part of a composite key", "A key depends on another key", "An attribute depends on a non-key"],
            correctIndex: 0,
            explanation: "It only happens with Composite Keys (Key made of A + B)."
          },
          {
            id: 40,
            question: "If a table has a single-column Primary Key, is it automatically in 2NF?",
            options: ["Yes", "No", "Depends on data"],
            correctIndex: 0,
            explanation: "You can't have a 'partial' dependency if the key has only one part!"
          },
          {
            id: 41,
            question: "Which anomaly is reduced by 2NF?",
            options: ["Update Anomaly", "Read Anomaly", "Deadlock"],
            correctIndex: 0,
            explanation: "By moving partial dependencies to their own table, you update data in one place only."
          },
          {
            id: 42,
            question: "To fix a 2NF violation, we usually...?",
            options: ["Decompose the table into two", "Add more columns", "Delete rows"],
            correctIndex: 0,
            explanation: "Split the table so the partial dependency gets its own full key in a new table."
          }
        ]
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
        mcqs: [
          {
            id: 43,
            question: "3NF deals with removing...?",
            options: ["Transitive Dependencies", "Partial Dependencies", "Cyclic Dependencies"],
            correctIndex: 0,
            explanation: "If A -> B and B -> C, then A -> C is a transitive dependency."
          },
          {
            id: 44,
            question: "A table is in 3NF if it is in 2NF and...?",
            options: ["No non-prime attribute determines another non-prime attribute", "All attributes are atomic", "It has no composite keys"],
            correctIndex: 0,
            explanation: "Non-keys should not depend on other non-keys."
          },
          {
            id: 45,
            question: "Which of these is a Transitive Dependency (if Key is A)?",
            options: ["A -> B, B -> C", "A -> B, A -> C", "A -> B, C -> D"],
            correctIndex: 0,
            explanation: "C depends on B, which depends on Key A. C is transitively dependent on A."
          },
          {
            id: 46,
            question: "Who said 'The Key, the Whole Key, and Nothing but the Key'?",
            options: ["Bill Kent (about 3NF)", "Codd", "Date"],
            correctIndex: 0,
            explanation: "It's a famous mnemonic for 3NF."
          },
          {
            id: 47,
            question: "If ZipCode defines City, and Student defines ZipCode, where should City be stored?",
            options: ["In a separate ZipCodes table", "In the Student table", "In a new City table linked to Student"],
            correctIndex: 0,
            explanation: "Store City once per ZipCode, not once per Student."
          }
        ]
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
        mcqs: [
          {
            id: 48,
            question: "BCNF is a stronger version of...?",
            options: ["3NF", "2NF", "1NF"],
            correctIndex: 0,
            explanation: "It covers edge cases that 3NF misses."
          },
          {
            id: 49,
            question: "For BCNF, if A -> B, then A must be...?",
            options: ["A Super Key", "A Primary Key", "A Foreign Key"],
            correctIndex: 0,
            explanation: "The determinant (LHS) must ALWAYS be a super key."
          },
          {
            id: 50,
            question: "Which of the following creates a BCNF violation?",
            options: ["A non-key attribute determining a part of a composite key", "A key determining a non-key", "A key determining another key"],
            correctIndex: 0,
            explanation: "If a regular column determines part of the Primary Key, it's 3NF but not BCNF."
          },
          {
            id: 51,
            question: "Is every BCNF table also in 3NF?",
            options: ["Yes", "No", "Sometimes"],
            correctIndex: 0,
            explanation: "Since BCNF is stricter, it automatically satisfies 3NF rules."
          },
          {
            id: 52,
            question: "BCNF mainly deals with anomalies in tables that have...?",
            options: ["Multiple overlapping candidate keys", "Single Primary Key", "No Keys"],
            correctIndex: 0,
            explanation: "It fixes issues where keys share columns (overlap)."
          }
        ]
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
        mcqs: [
          {
            id: 53,
            question: "4NF eliminates...?",
            options: ["Multi-valued Dependencies", "Join Dependencies", "Functional Dependencies"],
            correctIndex: 0,
            explanation: "Independent one-to-many relationships shouldn't be mixed."
          },
          {
            id: 54,
            question: "Which represents a Multi-valued Dependency?",
            options: ["A ->> B", "A -> B", "A <-> B"],
            correctIndex: 0,
            explanation: "The double arrow (->>) signifies multi-valued dependency."
          },
          {
            id: 55,
            question: "If a user has 3 phones and 3 emails, storing them in one table causes?",
            options: ["Cartesian Product (Data Explosion)", "Loss of data", "Faster retrieval"],
            correctIndex: 0,
            explanation: "You get 3x3=9 rows to represent simple data."
          }
        ]
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
        mcqs: [
          {
            id: 56,
            question: "5NF deals with...?",
            options: ["Join Dependency", "Multi-valued Dependency", "Partial Dependency"],
            correctIndex: 0,
            explanation: "It ensures a table can be reconstructed from its smaller pieces without error."
          },
          {
            id: 57,
            question: "A table is in 5NF if...?",
            options: ["Every Join Dependency is implied by the Candidate Keys", "It is in 4NF", "It has no keys"],
            correctIndex: 0,
            explanation: "This basically means the decomposition is lossless and valid."
          },
          {
            id: 58,
            question: "5NF is also known as...?",
            options: ["Project-Join Normal Form (PJNF)", "Domain-Key Normal Form", "Elementary Normal Form"],
            correctIndex: 0,
            explanation: "Because it focuses on Projections and Joins."
          }
        ]
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
        breakdown: [
          { label: 'Atomicity', text: 'All or Nothing. Either the entire transaction happens, or none of it does. No halfway states.' },
          { label: 'Consistency', text: 'Rules are Law. The database must move from one valid state to another, obeying all constraints.' },
          { label: 'Isolation', text: 'Privacy Mode. Transactions happening at the same time shouldn’t peek at or mess with each other.' },
          { label: 'Durability', text: 'Written in Stone. Once a transaction is committed, it stays saved even if the power goes out.' }
        ],
        slug: 'acid-properties',
        mcqs: [
          {
            id: 59,
            question: "Atomicity guarantees that...?",
            options: ["The transaction is fully completed or not at all", "The database remains consistent", "The data is permanently saved"],
            correctIndex: 0,
            explanation: "Atomicity is the 'All or Nothing' property."
          },
          {
            id: 60,
            question: "Which property ensures that a committed transaction is never lost?",
            options: ["Durability", "Atomicity", "Isolation"],
            correctIndex: 0,
            explanation: "Durability means changes are permanent (written to disk) even if the system crashes."
          },
          {
            id: 61,
            question: "Isolation ensures that...?",
            options: ["Concurrent transactions do not interfere with each other", "Transactions are atomic", "Constraints are enforced"],
            correctIndex: 0,
            explanation: "It treats every transaction as if it's the only one running in the system."
          },
          {
            id: 62,
            question: "Consistency in ACID means...?",
            options: ["Data satisfies all integrity constraints", "Data is always available", "Data is distributed"],
            correctIndex: 0,
            explanation: "The database moves from one valid state to another valid state."
          },
          {
            id: 63,
            question: "Who is responsible for Atomicity?",
            options: ["Transaction Manager", "Recovery Manager", "Query Optimizer"],
            correctIndex: 0,
            explanation: "The Transaction Manager ensures that the transaction is treated as a single unit."
          }
        ]
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
        mcqs: [
          {
            id: 64,
            question: "The initial state of a transaction is...?",
            options: ["Active", "Partially Committed", "Committed"],
            correctIndex: 0,
            explanation: "A transaction starts in the Active state."
          },
          {
            id: 65,
            question: "If a transaction fails, it moves to which state?",
            options: ["Aborted (Failed)", "Committed", "Terminated"],
            correctIndex: 0,
            explanation: "Failure leads to abort/rollback."
          },
          {
            id: 66,
            question: "A transaction is 'Committed' when...?",
            options: ["All changes are permanently saved", "The last statement executes", "The user logs out"],
            correctIndex: 0,
            explanation: "Commit means the changes are durable."
          }
        ]
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
        mcqs: [
          {
            id: 67,
            question: "Which keyword is used to retrieve data?",
            options: ["SELECT", "GET", "FETCH"],
            correctIndex: 0,
            explanation: "SELECT is the standard SQL command to query data."
          },
          {
            id: 68,
            question: "To filter rows, we use...?",
            options: ["WHERE", "FILTER", "HAVING"],
            correctIndex: 0,
            explanation: "WHERE clause filters records before any grouping."
          },
          {
            id: 69,
            question: "To sort the result set, we use...?",
            options: ["ORDER BY", "SORT BY", "ALIGN"],
            correctIndex: 0,
            explanation: "ORDER BY is used for sorting in Ascending or Descending order."
          },
          {
            id: 70,
            question: "Which wildcard selects ALL columns?",
            options: ["*", "%", "ALL"],
            correctIndex: 0,
            explanation: "SELECT * means select all columns."
          },
          {
            id: 71,
            question: "What does DISTINCT do?",
            options: ["Removes duplicate rows", "Deletes the table", "Sorts the data"],
            correctIndex: 0,
            explanation: "SELECT DISTINCT removes duplicate values from the result."
          }
        ]
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
        mcqs: [
          {
            id: 72,
            question: "GROUP BY is used to...?",
            options: ["Group rows with same values", "Sort rows", "Filter rows"],
            correctIndex: 0,
            explanation: "It groups rows that have the same values into summary rows."
          },
          {
            id: 73,
            question: "Which clause filters grouped data?",
            options: ["HAVING", "WHERE", "FILTER"],
            correctIndex: 0,
            explanation: "HAVING is like WHERE but for groups/aggregates."
          },
          {
            id: 74,
            question: "Can WHERE be used with GROUP BY?",
            options: ["Yes, before GROUP BY", "Yes, after GROUP BY", "No"],
            correctIndex: 0,
            explanation: "WHERE filters rows first, then GROUP BY creates groups, then HAVING filters groups."
          },
          {
            id: 75,
            question: "Which function is an Aggregate Function?",
            options: ["SUM()", "UPPER()", "LEN()"],
            correctIndex: 0,
            explanation: "SUM, AVG, COUNT, MIN, MAX are aggregate functions."
          },
          {
            id: 76,
            question: "If you group by 'Department', the result will have...?",
            options: ["One row per department", "One row per employee", "No rows"],
            correctIndex: 0,
            explanation: "It collapses multiple rows into unique group representatives."
          }
        ]
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
        mcqs: [
          {
            id: 77,
            question: "Which join returns only matching rows?",
            options: ["Inner Join", "Left Join", "Right Join"],
            correctIndex: 0,
            explanation: "Inner Join returns records that have matching values in both tables."
          },
          {
            id: 78,
            question: "Left Join returns...?",
            options: ["All left rows + matched right rows", "All right rows + matched left rows", "Only matched rows"],
            correctIndex: 0,
            explanation: "It keeps everything from the 'Left' table regardless of matches."
          },
          {
            id: 79,
            question: "A cross join (Cartesian product) of two tables with 10 rows each produces...?",
            options: ["100 rows", "20 rows", "10 rows"],
            correctIndex: 0,
            explanation: "10 * 10 = 100 rows."
          },
          {
            id: 80,
            question: "Which join returns all rows from both tables?",
            options: ["Full Outer Join", "Inner Join", "Left Join"],
            correctIndex: 0,
            explanation: "Full Outer Join combines the results of both Left and Right joins."
          },
          {
            id: 81,
            question: "If there is no match in a Left Join, the result for the right table is...?",
            options: ["NULL", "Zero", "Error"],
            correctIndex: 0,
            explanation: "Unmatched columns are filled with NULL."
          }
        ]
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
        mcqs: [
          {
            id: 82,
            question: "A Clustered Index determines the...?",
            options: ["Physical order of data", "Logical order of data", "Backup schedule"],
            correctIndex: 0,
            explanation: "It sorts the actual data rows on the disk."
          },
          {
            id: 83,
            question: "How many Clustered Indexes can a table have?",
            options: ["One", "Many", "None"],
            correctIndex: 0,
            explanation: "Since data can be physically sorted in only one way, there is only one clustered index."
          },
          {
            id: 84,
            question: "A Non-Clustered Index is like...?",
            options: ["The index at the back of a book", "The table of contents", "The cover of the book"],
            correctIndex: 0,
            explanation: "It points to the location of the data, but doesn't rearrange the data itself."
          }
        ]
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
        mcqs: [
          {
            id: 85,
            question: "Which of the following is a DDL command?",
            options: ["CREATE", "INSERT", "SELECT"],
            correctIndex: 0,
            explanation: "CREATE defines the structure (schema) of the database."
          },
          {
            id: 86,
            question: "DELETE is a ... command?",
            options: ["DML", "DDL", "DCL"],
            correctIndex: 0,
            explanation: "DELETE manipulates the data within the table."
          },
          {
            id: 87,
            question: "GRANT and REVOKE are examples of...?",
            options: ["DCL", "TCL", "DML"],
            correctIndex: 0,
            explanation: "Data Control Language (DCL) manages permissions."
          }
        ]
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
        mcqs: [
          {
            id: 88,
            question: "A Trigger executes when...?",
            options: ["An event (Insert/Update/Delete) occurs", "The user calls it", "The database starts"],
            correctIndex: 0,
            explanation: "It is event-driven and runs automatically."
          },
          {
            id: 89,
            question: "Triggers are often used for...?",
            options: ["Auditing and logging changes", "Creating tables", "Backup recovery"],
            correctIndex: 0,
            explanation: "They are great for tracking who changed what automatically."
          },
          {
            id: 90,
            question: "Can a Trigger return a value?",
            options: ["No", "Yes", "Only integers"],
            correctIndex: 0,
            explanation: "Triggers do not return values; they perform actions."
          }
        ]
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