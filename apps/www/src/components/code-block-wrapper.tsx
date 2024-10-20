'use client';

import * as React from 'react';

import { cn } from '@udecode/cn';

import { Button } from '@/registry/default/plate-ui/button';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string;
  open?: boolean;
}

export function CodeBlockWrapper({
  children,
  className,
  expandButtonTitle = 'View Code',
  open = false,
  ...props
}: CodeBlockProps) {
  const [isOpened, setIsOpened] = React.useState(open);

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <div className={cn('relative overflow-hidden', className)} {...props}>
        <CollapsibleContent
          className={cn('overflow-hidden', !isOpened && 'max-h-32')}
          forceMount
        >
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]',
              isOpened ? '[&_pre]:overflow-auto]' : '[&_pre]:overflow-hidden'
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            'absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 px-2 py-1',
            isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0'
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
