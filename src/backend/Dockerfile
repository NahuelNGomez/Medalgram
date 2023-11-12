# Dockerfile
# Stage 0: Build the application with Gradle
FROM gradle:7.3.2-jdk17 AS build

WORKDIR /app
COPY build.gradle settings.gradle /app/
COPY gradle /app/gradle
COPY src /app/src
RUN gradle build --no-daemon

# Stage 1: Create a smaller image with the application JAR
FROM eclipse-temurin:11 AS deploy

RUN mkdir /opt/app
# COPY japp.jar /opt/app
COPY --from=build /app/build/libs/*.jar /opt/app/app.jar
CMD ["java", "-jar", "/opt/app/app.jar"]

#COPY --from=build /app/build/libs/your-app-name.jar main.jar

#CMD ["java", "-jar", "main.jar"]

