import moment from "moment";

export const defaultDateRange = {
  startDate: moment().subtract(7, "days").startOf("day").toDate(),
  endDate: moment().endOf("day").toDate(),
};
