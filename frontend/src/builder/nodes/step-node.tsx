import { useDraggable } from '@dnd-kit/core';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { Handle, Position } from '@xyflow/react';
import {
    ArrowRightLeft,
    CopyPlus,
    EllipsisVertical,
    Trash,
} from 'lucide-react';
import { useMemo, useState, useRef } from 'react';

const ApStepNode = React.memo(({ data }: { data: ApNode['data'] }) => {
    const { toast } = useToast();
    const [
        selectStepByName,
        setAllowCanvasPanning,
        isSelected,
        isDragging,
        selectedStep,
        run,
        readonly,
        exitStepSettings,
        applyOperation,
        removeStepSelection,
        flowVersion,
        loopIndexes,
        setSampleData,
    ] = useBuilderStateContext((state) => {
        state.selectStepByName,
        state.setAllowCanvasPanning,
        !isNil(state.selectedStep) && state.selectedStep === data.step?.name,
        state.activeDraggingStep === data.step?.name,
        state.selectedStep,
        state.run,
        state.readonly,
        state.exitStepSettings,
        state.applyOperation,
        state.removeStepSelection,
        state.flowVersion,
        state.loopIndexes,
        state.setSampleData
    });
    const actionSelectorOperation = useRef<
        FlowOperationType.UPDATE_ACTION | FlowOperationType.UPDATE_TRIGGER
        >(FlowOperationType.UPDATE_ACTION);
    const deleteStep = () => {
        setSampleData(data.step!.name, undefined);
        applyOperation(
            {
                type: FlowOperationType.DELETE_ACTION,
                request: {
                    name: data.step!.name,
                },
            },
            () => toast(UNSAVED_CHANGES_TOAST),
        );
        removeStepSelection();
    };

    const duplicateStep = () => {
        applyOperation(
            {
                type: FlowOperationType.DUPLICATE_ACTION,
                request: {
                    stepName: data.step!.name,
                },
            },
            () => toast(UNSAVED_CHANGES_TOAST),
        );
    };
    const { stepMetadata } = actionsHooks.useStepMetadata({
        step: data.step!,
    });
    const stepIndex = useMemo(() => {
        const steps = flowHelper.getAllSteps(flowVersion.trigger);
        return steps.findIndex((step) => step.name === data.step!.name) + 1;
    }, [data, flowVersion]);

    const [openStepActionsMenu, setOPenStepActionsMenu] = useState(false);
    const [openActionSelector, setOpenActionSelector] = useState(false);

    const isTrigger = flowHelper.isTrigger(data.step!.type);
    const isAction = flowHelper.isAction(data.step!.type);
    const isEmptyTriggerSelected =
        selectedStep === 'trigger' && data.step?.type === TriggerType.EMPTY;

    const { attributes, listeners, setNodeRef } = useDraggable({
        id: data.step!.name,
        disabled: isTrigger || readonly,
        data: {
            type: DRAGGED_STEP_TAG,
        },
    });

    const stepOutputStatus = useMemo(() => {
        return getStepStatus(data.step?.name, run, loopIndexes, flowVersion);
    }, [data.step!.name, run, loopIndexes, flowVersion]);
    const showRunningIcon =
        isNil(stepOutputStatus) && run?.status === FlowRunStatus.RUNNING;

    const handleStepClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const { name } = data.step!;
        selectStepByName(name);
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <div
            id={data.step!.name}
            style={{
                height: `${AP_NODE_SIZE.stepNode.height}px`,
                width: `${AP_NODE_SIZE.stepNode.width}px`,
            }}
            className={cn(
                'transition-all border-box rounded-sm border border-solid border-border relative hover:border-primary group',
                {
                    'shadow-step-container': !isDragging,
                    'border-primary': isSelected,
                    'bg-background': !isDragging,
                    'border-none': isDragging,
                    'shadow-none': isDragging,
                },
            )}
            onClick={(e) => handleStepClick(e)}
            onMouseEnter={() => {
                setAllowCanvasPanning(false);
            }}
            onMouseLeave={() => {
                setAllowCanvasPanning(true);
            }}
            key={data.step?.name}
            ref{openActionSelector ? null : setNodeRef}
            {...(!openActionSelector ? attributes : {})}
            {...(!openActionSelector ? listeners : {})}
        >
        </div>
    );
})
