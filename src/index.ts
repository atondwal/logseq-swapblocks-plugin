import "@logseq/libs";
import {
  swapBlocks,
  childrenAsReferences,
  childrenWithBlockReferences,
} from "./utils";

const main = () => {
  console.log("Swap plugin loaded.");

  logseq.Editor.registerBlockContextMenuItem(
    "Swap ref/original blocks",
    async (e) => {
      swapBlocks(e);
    }
  );

  logseq.Editor.registerBlockContextMenuItem(
    "Apply children as references",
    async (e) => {
      childrenAsReferences(e);
    }
  );

  logseq.Editor.registerBlockContextMenuItem(
    "Apply children as block references",
    async (e) => {
      childrenWithBlockReferences(e);
    }
  );

  logseq.Editor.registerSlashCommand(
    "Swap with original block",
    async () => {
      const currentBlock = await logseq.Editor.getCurrentBlock();
      if (currentBlock) {
        swapBlocks(currentBlock);
      } else {
        logseq.App.showMsg("Please position your cursor in a block reference first");
      }
    }
  );
};

logseq.ready(main).catch(console.error);
