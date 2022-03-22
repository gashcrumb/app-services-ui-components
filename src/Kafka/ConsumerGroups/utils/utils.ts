import { useTranslation } from "react-i18next";
import { ConsumerGroupState } from "../types";

export const ConsumerGroupStateLabel = (state: ConsumerGroupState) => {
  const { t } = useTranslation(["kafka"]);

  switch (state) {
    case "Stable":
      return t("consumerGroup.state.stable");
    case "Empty":
      return t("consumerGroup.state.empty");
    case "Dead":
      return t("consumerGroup.state.dead");
    case "CompletingRebalance":
      return t("consumerGroup.state.completing_rebalance");
    case "PreparingRebalance":
      return t("consumerGroup.state.preparing_rebalance");
    case "Unknown":
      return t("consumerGroup.state.unknown");
    default:
      return null;
  }
};
