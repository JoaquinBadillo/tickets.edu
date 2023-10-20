# Tickets Edu

Proposed frontend for the ticketing system for _Fundación Por México_.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)

## Tech Stack

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Jest](https://img.shields.io/badge/Jest-1_Test-blue)

## Usage 

To run the project on your local machine you will need to [install](#installation) the dependencies and create a `.env` file for the [environment variables](#environment-variables).

### Installation

This project uses `npm` as the package manager. Make sure you have npm installed by executing
```console
npm --version
```

If installed and configured properly you should see the version of your package manager `x.y.z`.

To install dependencies execute
```console
npm i
```
at the root of this repository (since the `package.json` is located there).

### Environment Variables

Environment variables allow us to share this repository without exposing sensible information. The following environment variables must be declared on a `.env` file:
- `VITE_API_URL`

Which is just the API link (which will be used in the client), therefore it would be relevant to use a proxy in a production environment.

### Running Locally

If you have followed this guide up to this point you are ready to run this project, execute the following command at the root of the repository:
```console
npm run dev
```

You shall see that the vite server is running.
