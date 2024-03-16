# Ware-House-Robot

A TypeScript project to execute commands for a robot in a warehouse. This project is created for test purposes.

## Overview

This project implements a warehouse robot that can accept commands to move within the boundaries of a grid in a warehouse. It includes functionalities for controlling the robot's movement, handling crate lifting, and dropping operations.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jklinson/ware-house-robot.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

## Usage

### Build the project

To build the Typescript code and generate the compiled Javascript files, run:

   ```bash
   npm build
   ```

### Run the application

To start the application and execute commands for the warehouse robot, run:

```bash
npm start
```

### Testing

This project uses Jest for testing. To run the tests use:

  ```bash
npm start
```

### Project Structure

```graphql
.
├── src/                    # Source files
│   ├── index.ts            # Entry point of the application
│   ├── ware-house-robot.ts # Implementation of the warehouse robot
│   └── utils.ts            # Utility functions
├── dist/                   # Compiled JavaScript files (generated after build)
├── node_modules/           # Node.js modules (generated after npm install)
├── tsconfig.json           # TypeScript configuration file
├── jest.config.js           # Jest configuration file
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```
