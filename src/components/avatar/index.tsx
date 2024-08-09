import {
  Avatar as AvatarBase,
  AvatarFallback,
  AvatarImage,
} from "@/packages/components/ui/avatar";
import { cn } from "@/packages/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

type Props = { image?: string } & React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
>;
function Avatar({ className, image, ...props }: Props) {
  return (
    <AvatarBase className={cn("w-8 h-8", className)} {...props}>
      <AvatarImage
        src={image ? image : "https://github.com/shadcn.png"}
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarBase>
  );
}

export default Avatar;
