import { Options } from "@contentful/rich-text-react-renderer";
import { ContentfulRichTextGatsbyReference, renderRichText as rrt } from "gatsby-source-contentful/rich-text";
import { ReactNode } from "react";

interface RenderRichTextData<T extends ContentfulRichTextGatsbyReference> {
	raw: string | null | undefined;
	references: T[];
}

export const renderRichText = <TReference extends ContentfulRichTextGatsbyReference>(
	data: Partial<RenderRichTextData<TReference>>,
	options?: Options,
): ReactNode => {
	return rrt(data as any, options);
};
