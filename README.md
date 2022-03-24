<h1 align="center"><b>Fly</b></h1>
<div align="center">
  
  [![Continuous Integration](https://github.com/animo/fly/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/animo/fly/actions/workflows/continuous-integration.yml)
  [![Continuous Deployment](https://github.com/animo/fly/actions/workflows/continuous-deployment.yml/badge.svg)](https://github.com/animo/fly/actions/workflows/continuous-deployment.yml)
  [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)
</div>

## 🛠️ Usage

### Prerequisites

- [NodeJS](https://nodejs.org/en/) v16.X.X - Other versions may work, not tested
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/downloads) - You probably already have this

### 🖥  Client

Copy the `.env.example` file to a `.env` file and set the environment variables.

```bash
cd client
cp .env.example .env
```

| Variable                        | Description                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `REACT_APP_HOST_BACKEND`        | Used in the frontend application to connect with the backend. Should be `http://localhost:5000` for development.      |


### 🎛️ Server

Copy the `.env.example` file to a `.env` file and set the environment variables.

```bash
cd server
cp .env.example .env
```

| Variable                        | Description                                                                                                           |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `AGENT_PUBLIC_DID_SEED`         | Used in the backend application for the agent. Should be set to your agent's public DID in development/production.    |
| `AGENT_ENDPOINT`                | Used in the backend application for the agent. Should be set to your agent's endpoint in development/production.      |
| `AGENT_WALLET_KEY`              | Used in the backend application for the agent. Should be set to your agent's wallet key in development/production.      |

### Node version

```bash
nvm use
```

### Install Dependencies

```bash
yarn install
```

### Development

```bash
yarn dev
```

## How To Contribute
You're welcome to contribute to this demo. Please make sure to open an issue first!
