import {
  ActionsColumn,
  IAction,
  TableComposable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@patternfly/react-table";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ConsumerGroup } from "../types";
import { ConsumerGroupStateLabel } from "./ConsumerGroupStateLabel";

export type ConsumerGroupTableProps = {
  consumerGroup: ConsumerGroup[];
  consumerGroupByTopic: boolean;
  onClickDeleteModal: (data: ConsumerGroup) => void;
  onClickPartitionoffset: (data: ConsumerGroup) => void;
  onClickResetoffset: (data: ConsumerGroup) => void;
};

export const ConsumerGroupTable: FunctionComponent<ConsumerGroupTableProps> = ({
  consumerGroup,
  consumerGroupByTopic,
  onClickDeleteModal,
  onClickPartitionoffset,
  onClickResetoffset,
}) => {
  const { t } = useTranslation(["kafka"]);

  const tableColumns = {
    group_id: t("consumerGroup.consumer_group_id"),
    active_members: t("consumerGroup.active_members"),
    partitions_with_lag: t("consumerGroup.partitions_with_lag"),
    state: t("consumerGroup.state_header"),
  };

  const tableRow = (consumer: ConsumerGroup) => {
    if (consumerGroupByTopic) {
      return [];
    }
    const actionResolver = (consumer: ConsumerGroup): IAction[] => [
      {
        title: t("common:delete"),
        onClick: () => onClickDeleteModal(consumer),
      },
      {
        title: t("consumerGroup.view_partitions_offsets"),
        onClick: () => onClickPartitionoffset(consumer),
      },
      {
        title: t("consumerGroup.reset_offset"),
        onClick: () => onClickResetoffset(consumer),
      },
    ];
    const rowActions: IAction[] | null = actionResolver(consumer);
    return rowActions ? <ActionsColumn items={rowActions} /> : null;
  };

  return (
    <TableComposable aria-label={t("consumerGroup.consumer_group_list")}>
      <Thead>
        <Tr>
          <Th>{tableColumns.group_id}</Th>
          <Th>{tableColumns.active_members}</Th>
          <Th
            info={{
              popover: (
                <div>{t("consumerGroup.partitions_with_lag_description")}</div>
              ),
              ariaLabel: "partitions with lag",
              popoverProps: {
                headerContent: t("consumerGroup.partitions_with_lag_name"),
              },
            }}
          >
            {tableColumns.partitions_with_lag}
          </Th>
          <Th>{tableColumns.state}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {consumerGroup.map((consumer, index) => {
          return (
            <Tr key={index}>
              <Td key={tableColumns.group_id}>{consumer.consumerGroupId}</Td>
              <Td key={tableColumns.active_members}>
                {consumer.activeMembers}
              </Td>
              <Td key={tableColumns.partitions_with_lag}>
                {consumer.partitionsWithLag}
              </Td>
              <Td key={tableColumns.state}>
                {ConsumerGroupStateLabel(consumer.state)}
              </Td>
              <Td>{tableRow(consumer)}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </TableComposable>
  );
};
