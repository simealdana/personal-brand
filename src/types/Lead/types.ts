import {
  LeadStatus,
  BudgetRange,
  EmailFlowStatus,
  CurrentEmailFlow,
} from "./enums";

export type Lead = {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  hasIdeaClear: boolean;
  budget: BudgetRange;
  status: LeadStatus;
  emailFlowStatus: EmailFlowStatus;
  currentEmailFlow: CurrentEmailFlow;
  currentEmailSequence: number;
  eventDates: {
    formSubmitted: Date;
    callBooked?: Date;
    callScheduledFor?: Date;
    callAttended?: Date;
    callNoShow?: Date;
    mentorshipStart?: Date;
    mentorshipEnd?: Date;
    lastEmailSent?: Date;
  };
  unsubscribedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};
