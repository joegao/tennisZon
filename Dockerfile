FROM node:20-bookworm-slim AS frontend-build

WORKDIR /workspace

COPY src/main/frontend/package.json src/main/frontend/pnpm-lock.yaml src/main/frontend/pnpm-workspace.yaml ./src/main/frontend/
COPY src/main/frontend ./src/main/frontend

RUN mkdir -p src/main/resources/static \
    && cd src/main/frontend \
    && corepack enable \
    && pnpm install --frozen-lockfile \
    && pnpm run build

FROM eclipse-temurin:17-jdk-jammy AS app-build

WORKDIR /workspace

COPY gradle ./gradle
COPY gradlew build.gradle settings.gradle ./
COPY src/main/java ./src/main/java
COPY src/main/resources ./src/main/resources
COPY --from=frontend-build /workspace/src/main/resources/static ./src/main/resources/static

RUN chmod +x ./gradlew \
    && ./gradlew clean bootJar --no-daemon

FROM eclipse-temurin:17-jre-jammy

WORKDIR /app

COPY --from=app-build /workspace/build/libs/tennis-zon-0.0.1-SNAPSHOT.jar ./app.jar

ENV PORT=8080
EXPOSE 8080

CMD ["sh", "-c", "java -jar app.jar --server.port=${PORT}"]
