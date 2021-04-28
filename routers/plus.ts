import { createRouter } from "pages/api/trpc/[trpc]";
import service from "services/plus";
import { throwIfNotLoggedIn } from "utils/api";
import { suggestionFullSchema } from "utils/validators/suggestion";
import { voteSchema, votesSchema } from "utils/validators/votes";
import { vouchSchema } from "utils/validators/vouch";

const plusApi = createRouter()
  .query("suggestions", {
    resolve() {
      return service.getSuggestions();
    },
  })
  .query("statuses", {
    resolve() {
      return service.getPlusStatuses();
    },
  })
  .query("usersForVoting", {
    resolve({ ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.getUsersForVoting(user.id);
    },
  })
  .query("votedUserScores", {
    resolve({ ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.votedUserScores(user.id);
    },
  })
  .query("votingProgress", {
    resolve() {
      return service.votingProgress();
    },
  })
  .mutation("suggestion", {
    input: suggestionFullSchema,
    resolve({ input, ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.addSuggestion({ input, userId: user.id });
    },
  })
  .mutation("vouch", {
    input: vouchSchema,
    resolve({ input, ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.addVouch({ input, userId: user.id });
    },
  })
  .mutation("vote", {
    input: votesSchema,
    resolve({ input, ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.addVotes({ input, userId: user.id });
    },
  })
  .mutation("editVote", {
    input: voteSchema,
    resolve({ input, ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.editVote({ input, userId: user.id });
    },
  })
  .mutation("endVoting", {
    resolve({ ctx }) {
      const user = throwIfNotLoggedIn(ctx.user);
      return service.endVoting(user.id);
    },
  });
export default plusApi;
