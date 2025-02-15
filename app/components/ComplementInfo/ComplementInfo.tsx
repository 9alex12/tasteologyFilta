import { useRef, useState } from "react";
import type {
  ProductSkeleton,
  Product,
} from "~/api/contentful/contentfulApi.d";

const getElements = (element: HTMLElement) => ({
  img: element?.querySelector("img") as HTMLImageElement,
  title: element?.querySelector("h3") as HTMLHeadingElement,
  desc: element?.querySelector("p") as HTMLParagraphElement,
});

const setViewTransitionName = ({
  elements,
  isEmpty,
}: {
  elements: {
    img: HTMLImageElement;
    title: HTMLHeadingElement;
    desc: HTMLParagraphElement;
  };
  isEmpty?: boolean;
}) => {
  const { img, title, desc } = elements;
  img.style.viewTransitionName = isEmpty ? "" : "modal-img";
  title.style.viewTransitionName = isEmpty ? "" : "modal-title";
  desc.style.viewTransitionName = isEmpty ? "" : "modal-desc";
};

const executeViewTransition = async ({
  from,
  to,
  cb,
}: {
  from: HTMLElement;
  to: HTMLElement;
  cb: () => void;
}) => {
  if (!document.startViewTransition) {
    cb();
    return;
  }
  const fromElements = getElements(from);
  const toElements = getElements(to);

  setViewTransitionName({ elements: fromElements });
  const transition = document.startViewTransition(() => {
    setViewTransitionName({ elements: fromElements, isEmpty: true });
    setViewTransitionName({ elements: toElements });
    cb();
  });
  await transition.finished;
  setViewTransitionName({ elements: toElements, isEmpty: true });
};

const ComplementInfo = ({
  productsData,
}: {
  productsData: ProductSkeleton[];
}) => {
  const [selectedCard, setSelectedCard] = useState<Product>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cardRef = useRef<HTMLElement | null>(null);

  return (
    <section className="w-full flex flex-col px-5 md:px-[147px] md:py-[120px]">
      <h2 className="text-3xl w-fit mx-auto">
        TASTE THE COLOURS
        <hr className="my-[30px]" />
      </h2>
      <ul className="flex justify-around flex-wrap gap-y-5 gap-x-1">
        {productsData?.map((card) => {
          const srcImg = card.fields.image.fields.file.url;
          return (
            <li
              key={card.fields.title}
              className="max-w-[375px] text-center text-[21px]"
            >
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  setSelectedCard(card.fields);
                  cardRef.current = (e.target as HTMLElement)
                    .parentElement as HTMLElement;

                  executeViewTransition({
                    from: cardRef.current,
                    to: dialogRef.current as HTMLElement,
                    cb: () => dialogRef.current?.showModal(),
                  });
                }}
              >
                <img src={srcImg} alt="" className="mb-[30px]" />
                <h3 className="font-bold mb-[10px]">{card.fields.title}</h3>
                <p className="font-light px-[30px]">{card.fields.text}</p>
              </button>
            </li>
          );
        })}
      </ul>
      <dialog
        ref={dialogRef}
        className="w-[70%] h-fit lg:h-[300px] backdrop:bg-black/70"
      >
        <section className="lg:flex h-auto md:h-full">
          <img
            src={selectedCard?.image?.fields.file.url}
            alt=""
            className="mx-auto md:mx-[376px] md:mx-auto lg:mx-0"
          />
          <article className="pl-9 pr-9 py-6">
            <button
              className="cursor-pointer absolute right-6"
              onClick={async () => {
                const modal = dialogRef.current as HTMLDialogElement;
                executeViewTransition({
                  from: modal,
                  to: cardRef.current as HTMLElement,
                  cb: () => modal?.close(),
                });
              }}
            >
              X
            </button>
            <h3 className="font-bold mb-[10px] text-lg md:text-[32px]">
              {selectedCard?.title}
            </h3>
            <p className="font-light text-lg md:text-[24px]">{selectedCard?.text}</p>
          </article>
        </section>
      </dialog>
    </section>
  );
};

export default ComplementInfo;
