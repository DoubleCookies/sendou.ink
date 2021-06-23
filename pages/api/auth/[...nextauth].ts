// @ts-nocheck
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import Providers from "next-auth/providers";
import prisma from "prisma/client";

const options: NextAuthOptions = {
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      // @ts-ignore
      scope: "identify",
    }),
  ],
  jwt: {
    secret: process.env.JWT_SECRET!,
  },
  callbacks: {
    session: async (_, user) => {
      return Promise.resolve(user);
    },
    jwt: async (token, user, _, profile) => {
      // no profile means callback wasn't called because of a sign in
      if (!profile) return Promise.resolve(token);

      const userFromDb = await prisma.user.upsert({
        create: {
          discordId: profile.id,
          username: profile.username,
          discriminator: profile.discriminator,
          discordAvatar: profile.avatar,
        },
        update: {
          username: profile.username,
          discriminator: profile.discriminator,
          discordAvatar: profile.avatar,
        },
        where: {
          discordId: profile.id,
        },
      });

      return Promise.resolve(userFromDb);
    },
  },
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default authHandler;
