import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/packages/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/packages/components/ui/dialog";
import Image from "next/image";
import EntryImage from "./EntryImage";

function EntryImages() {
  return (
    <Dialog>
      <DialogHeader className="grid grid-cols-2 gap-[6px]">
        <DialogTrigger>
          <EntryImage isSensitive />
        </DialogTrigger>
        <DialogTrigger>
          <EntryImage />
        </DialogTrigger>
        <DialogTrigger>
          <EntryImage />
        </DialogTrigger>
        <DialogTrigger>
          <EntryImage />
        </DialogTrigger>
      </DialogHeader>

      {/* List images */}
      <DialogContent className="rounded-none bg-transparent shadow-none border-0 h-full w-full max-w-full">
        <Carousel className="flex">
          <CarouselContent
            className="flex m-0 p-0"
            classNameContainer="flex items-center justify-center"
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="flex px-4 justify-center">
                <Image
                  src={require("@/assets/images/home-default-2.jpg")}
                  alt="entry image"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-5" />
          <CarouselNext className="-right-5" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}

export default EntryImages;
