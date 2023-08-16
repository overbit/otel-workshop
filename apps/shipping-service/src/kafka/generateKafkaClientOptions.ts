import { ConfigService } from "@nestjs/config";
import { KafkaOptions, Transport } from "@nestjs/microservices";

export const generateKafkaClientOptions = (
  configService: ConfigService
): KafkaOptions => {
  if (!configService.get("KAFKA_BROKERS")) {
    throw new Error("KAFKA_BROKERS environment variable must be defined");
  }

  if (!configService.get("KAFKA_ENABLE_SSL")) {
    throw new Error("KAFKA_ENABLE_SSL environment variable must be defined");
  }

  if (!configService.get("KAFKA_CLIENT_ID")) {
    throw new Error("KAFKA_CLIENT_ID environment variable must be defined");
  }

  if (!configService.get("KAFKA_GROUP_ID")) {
    throw new Error("KAFKA_GROUP_ID environment variable must be defined");
  }

  const kafkaBrokersString = configService.get("KAFKA_BROKERS");
  const kafkaEnableSSL = configService.get("KAFKA_ENABLE_SSL") === "true";
  const kafkaClientId = configService.get("KAFKA_CLIENT_ID");
  const kafkaGroupId = configService.get("KAFKA_GROUP_ID");

  return {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: kafkaClientId,
        brokers: [...kafkaBrokersString.split(",")],
        ssl: kafkaEnableSSL,
      },
      producer: {
        metadataMaxAge: 3000,
      },
      consumer: {
        rebalanceTimeout: 3000,
        groupId: kafkaGroupId,
      },
    },
  };
};
