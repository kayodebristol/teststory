import { UnknownLineContext } from '../../parser/StoryParser';
import { StoryLineElement, StructureElementType } from './story';

export class StoryUnknown implements StoryLineElement {
    constructor(public ctx: Readonly<UnknownLineContext>){}
    
    getContext(): UnknownLineContext {
        return this.ctx;
    }

    getType(): StructureElementType {
        return 'UNKNOWN';
    }

    getLine(){
        return this.ctx.start.line;
    }

    debugString(){
        return `Unknown`;
    }

    isStoryElement(): boolean {
        return false;
    }

}