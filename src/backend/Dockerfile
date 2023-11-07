# Dockerfile
# Stage 0: Build the application with Gradle
FROM gradle:7.3.2-jdk17 AS build

WORKDIR /app
COPY build.gradle settings.gradle /app/
COPY gradle /app/gradle
COPY src /app/src
RUN gradle build --no-daemon

# Stage 1: Create a smaller image with the application JAR
FROM adoptopenjdk:17-jre-hotspot-bionic AS deploy

WORKDIR /app
COPY --from=build /app/build/libs/your-app-name.jar main.jar

CMD ["java", "-jar", "main.jar"]