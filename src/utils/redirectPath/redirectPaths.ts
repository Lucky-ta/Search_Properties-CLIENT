import { useRouter } from "next/navigation"

type NextRouter = ReturnType<typeof useRouter>;

export const redirectToPath = (nextRouter: NextRouter, path: string) => {
    return nextRouter.push(path);
}