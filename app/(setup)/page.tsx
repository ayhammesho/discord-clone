import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { InitialModals } from "@/components/modals/initial-modals";

import { db } from "@/lib/db";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <h1>Welcome to our new comers</h1>
      <InitialModals />
    </div>
  );
};

export default SetupPage;
