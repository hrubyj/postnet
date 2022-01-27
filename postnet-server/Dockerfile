FROM maven:3.8.4-openjdk-11-slim as builder
WORKDIR /app
COPY . .
RUN mvn clean package

FROM openjdk:11-bullseye as runner
#RUN addgroup -S spring && adduser -S spring -G spring
#USER spring:spring

COPY --from=builder /app/target/*.jar ./app.jar

ENTRYPOINT ["java","-jar","app.jar"]