//import isISO31661Alpha2 from "validator/es/lib/isISO31661Alpha2";
import { weaponsWithHero } from "lib/lists/weaponsWithHero";
import * as z from "zod";

export const ProfileSchema = z.object({
  bio: z.string().max(10000).optional().nullable(),
  country: z
    .string()
    //.refine((val) => isISO31661Alpha2(val))
    .optional()
    .nullable(),
  customUrlPath: z.string().max(32).optional().nullable(),
  sensMotion: z
    .number()
    .min(5)
    .max(5)
    .refine((val) => (val * 10) % 5 === 0)
    .optional()
    .nullable(),
  sensStick: z
    .number()
    .min(5)
    .max(5)
    .refine((val) => (val * 10) % 5 === 0)
    .optional()
    .nullable(),
  twitchName: z.string().max(25).optional().nullable(),
  twitterName: z.string().max(15).optional().nullable(),
  youtubeId: z.string().optional().nullable(),
  // weaponsWithHero
  weaponPool: z
    .array(z.string())
    .max(5)
    .refine((arr) => arr.every((val) => weaponsWithHero.includes(val as any)))
    .optional()
    .nullable(),
});