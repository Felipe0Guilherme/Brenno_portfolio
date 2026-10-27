import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { Report_Error } from "../lib/error-reporting";

function NotFoundComponent() {
  /* igual ao seu */
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  /* igual ao seu */
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: Outlet,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});