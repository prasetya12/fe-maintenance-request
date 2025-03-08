# Use Node.js LTS as base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build Next.js app
RUN npm run build

# Use lightweight Node.js image for production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app ./

ENV PORT=4000

# Expose Next.js port
EXPOSE 4210

# Start the app
CMD ["npm", "run", "start"]