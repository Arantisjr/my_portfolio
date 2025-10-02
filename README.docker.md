# Docker Setup for ndaab Landing Page

This guide explains how to run the **my portfolio** using Docker, both for **development** (with hot reload) and **production** (optimized build).

---

## Quick Commands

| Action | Command |
|--------|-----------------------------------------------------|
| Start dev container (build if needed) | `docker-compose -f docker-compose.dev.yml up --build` |
| Start dev container (reuse existing image) | `docker-compose -f docker-compose.dev.yml up` |
| Stop dev container | `docker-compose -f docker-compose.dev.yml down` or `Ctrl+C` |
| View dev logs | `docker-compose -f docker-compose.dev.yml logs -f` |
| Start production container | `docker-compose up --build` |
| Stop production container | `docker-compose down` |
| Rebuild without cache | `docker-compose build --no-cache` |

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- Git (for cloning the repo)

**Ubuntu Installation:**
```bash
# Install Docker
sudo apt update
sudo apt install docker.io

# Install Docker Compose
sudo apt install docker-compose

# Add user to docker group (optional)
sudo usermod -aG docker $USER
# Log out and back in for changes to take effect
```

---

## Development Setup

### 1. Build and start the dev container:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### 2. Access your application:
- **Local URL:** http://localhost:3000
- **Hot reload enabled** - changes automatically refresh

### 3. Development features:
- ✅ **Hot reload** - File changes trigger automatic browser refresh
- ✅ **Volume mounting** - Local files sync with container
- ✅ **Fast builds** - Dependencies cached between rebuilds
- ✅ **Next.js Turbopack** - Enhanced development experience

### 4. Making changes:
- Edit any file in your project
- Save the file
- Browser automatically refreshes with changes
- No need to restart the container

---

## Production Setup

### 1. Build and start production container:
```bash
docker-compose up --build
```

### 2. Production features:
- ✅ **Optimized build** - Minified and compressed assets
- ✅ **Multi-stage build** - Smaller image size
- ✅ **Production Node.js** - Optimized runtime
- ✅ **Non-root user** - Enhanced security

### 3. Access your application:
- **Production URL:** http://localhost:3000

---

## File Structure

```
my_portfolio/
├── Dockerfile                 # Production Docker image
├── Dockerfile.dev            # Development Docker image
├── docker-compose.yml        # Production compose config
├── docker-compose.dev.yml    # Development compose config
├── .dockerignore            # Files to ignore in Docker build
├── package.json             # Node.js dependencies
└── README.docker.md         # This file
```

---

## Advanced Commands

### Container Management
```bash
# Enter running container shell
docker-compose -f docker-compose.dev.yml exec web sh

# View container stats
docker stats

# List running containers
docker ps

# Remove all containers and images
docker system prune -a
```

### Troubleshooting
```bash
# Clean build cache
docker builder prune -a

# Rebuild without cache (dev)
docker-compose -f docker-compose.dev.yml build --no-cache

# Rebuild without cache (prod)
docker-compose build --no-cache

# View detailed logs
docker-compose -f docker-compose.dev.yml logs -f web
```

### Port Management
```bash
# Check what's using port 3000
sudo netstat -tulpn | grep 3000

# Change port in docker-compose files
# Modify "3000:3000" to "3001:3000" for port 3001
```

---

## Environment Variables

Create `.env.local` in your project root for environment-specific settings:

```bash
# Example .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
```

**Note:** Environment files are automatically loaded by Next.js in the container.

---

## Docker Images

### Development Image (`Dockerfile.dev`)
- Based on `node:22-alpine`
- Includes all dev dependencies
- Hot reload enabled
- Volume mounted for live editing

### Production Image (`Dockerfile`)
- Multi-stage build (deps → builder → runner)
- Optimized for size and performance
- Only production dependencies
- Non-root user for security

---

