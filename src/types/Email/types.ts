import { EmailType, EmailStatus } from "./enums";
import { CurrentEmailFlow } from "../Lead/enums";

export type Email = {
  id: string;
  leadId: string;
  emailType: EmailType;
  flow: CurrentEmailFlow;
  sequenceNumber: number;
  status: EmailStatus;
  scheduledFor: Date;
  sentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};
