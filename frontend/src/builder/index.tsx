import {
    ReactFlow,
    Background,
    getNodesBounds,
    useReactFlow,
} from '@xyflow/react';
import { ApStepNode } from './nodes/step-node';

const nodeTypes = {
    stepNode: ApStepNode,
    placeholder: StepPlaceHolder,
    bigButton: ApBigButton,
    loopPlaceholder: LoopStepPlaceHolder,
}

const ActionCanvas = React.memo(() => {

    return (
        <div className="size-full relative overflow-hidden">
            <ReactFlow
                nodeTypes={nodeTypes}
            >
            </ReactFlow>
        </div>
    );
})
