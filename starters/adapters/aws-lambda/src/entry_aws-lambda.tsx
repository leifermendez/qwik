/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Aws Lambda when building for production.
 *
 * Learn more about the Aws Lambda integration here:
 * - https://qwik.builder.io/docs/deployments/aws/
 *
 */
import {
  createQwikCity,
  type PlatformAwsLambda,
} from "@builder.io/qwik-city/middleware/aws-lambda";
import qwikCityPlan from "@qwik-city-plan";
import { manifest } from "@qwik-client-manifest";
import render from "./entry.ssr";

declare global {
  interface QwikCityPlatform extends PlatformAwsLambda {}
}

export const qwikApp = createQwikCity({ render, qwikCityPlan, manifest });
