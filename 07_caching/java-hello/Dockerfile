FROM gradle:6.8-jdk11 AS builder

ENV GRADLE_DAEMON false
ENV GRADLE_OPTS '-Dorg.gradle.daemon="${GRADLE_DAEMON}"'
ENV GRADLE_USER_HOME=/home/gradle/.gradle2

RUN \
  bash -c 'mkdir -p /code/{.gradle,build}' && \
  chown -R gradle:gradle /code

WORKDIR /code
USER gradle

EXPOSE 80

COPY --chown=gradle:gradle build.gradle settings.gradle ./

RUN gradle downloadDependencies

COPY --chown=gradle:gradle src ./src/

RUN gradle assemble

ENV GRADLE_DAEMON true

CMD ["gradle", "run"]

FROM gcr.io/distroless/java:11

WORKDIR /code/build/libs

COPY --from=builder \
  "/code/build/libs/hello.jar" \
  "/code/build/libs/hello.jar"
CMD ["/code/build/libs/hello.jar"]
