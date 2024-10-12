# JavaScript Concepts

## What Really Is JavaScript?

JS is a highly abstracted programming language.  
**Abstraction:** hiding the implementation details, showing only the functionality to the user.

JS collect garbage automatically.

JS is a JIT compiled language.  
JIT: Just-In-Time  
JS is not a purely interpreted language. Modern JS is JIT compiled. JIT compiler converts the entire code into machine code and execute them immediately.

JS is a multi-paradigm programming language.  
1. Procedural Programming
2. Object-Oriented Programming
3. Functional Programming  
  
JS is a proto-typed based programming language.  

JS is dynamically typed.  

**JavaScript:**  
- High Abstraction
- Garbage Collection
- JIT Compiled
- Multi-paradigm
- Prototyped-based
- Dynamically-typed  

## JavaScript Engine V8 Internal Mechanism  

**What is V8:** V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++.  It is used in Chrome and in Node.js [...See more](https://v8.dev/)  

JS execute in chrome browser by V8 engine. 

## Execution Context
- An execution context is an environment
- Inside the execution context a piece of JavaScript code gets executed
- Variables, parameters and other information related to the piece of code get stored in the execution context

**There are two types of Execution Context in JS:**
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

**Global Execution Context**
Whenever the JS engine receives a script file, it first create a default EC known as the GEC.
- GEC is the base/default EC
- All JS code that is not inside of a function gets execution
- For every JS file, there can only be one GEC

**Function Execution Context**
Whenever a function is called, the JS engine creates a different type of EC known as a FEC.
- Every time a function is called, a new execution context is created for the function
- Each function has its own execution context
- Since every function call gets its own FEC, there can be more than one FEC in the run-time of a script

**Phases**
The execution context is created in two phases:
1. Creation Phase
2. Execution Phase

## Call Stack
- The call stack is used by JS to keep track of multiple function calls
- In order to manage the execution contexts, the JS engine used a call stack

## Single-Threaded
JS is Single-Threaded.
- Single-threaded means only one statement is executed at a time
- JS only has one call stack
- JS runs code line by line
- Must finish executing a piece of code before moving onto the next

**Synchronous:** Loading serial wise (sequentially)
**Asynchronous:** Loading at their own pace, none is waiting for any of others (Ex. setTimeout())

## Promise
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise is in one of these status:
1. Pending
2. Resolve
3. Reject

**Fetch API:**
1. The fetch() method starts the process of fetching a resource from a server
2. The fetch() method returns a Promise that resolves to a Response object
3. A fetch() method only rejects when a network error is encountered

## Event-loop
Click [here](https://www.youtube.com/watch?v=8aGhZQkoFbQ) for watching YT video [Duration: 26:52]

## Promise All
- A JS method that takes an iterable of promises as input
- Returns a single promise that resolves when all input promises have resolved
- Rejects if any of the input promises reject