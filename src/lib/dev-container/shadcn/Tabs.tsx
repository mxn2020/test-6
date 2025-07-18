// src/lib/dev-container/shadcn/Tabs.tsx

import React from 'react';
import { Container } from '../components/Container';

import { DevProps } from '../types';
import { useDevMode } from '../hooks/useDevMode';

import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
} from '../../../components/ui/tabs';

// Tabs root component (FC type)
type ShadcnTabsProps = React.ComponentProps<typeof ShadcnTabs>;
type DevTabsProps = ShadcnTabsProps & DevProps & { children?: React.ReactNode };

export const Tabs = ({ devId, devName, devDescription, devSelectable = true, devDetailed, children, ...props }: DevTabsProps) => {
  const { config } = useDevMode();
  const shouldContainerize = devDetailed === true || (devDetailed !== false && config.detailedContainerization);
  
  // If no devId provided, throw build error
  if (!devId && shouldContainerize) {
    if (import.meta.env.DEV) {
      throw new Error('[Dev Container] devId is required for containerized components. Either provide a devId or set devId="noID" to disable containerization.');
    }
  }
  
  // If no devId provided or explicitly set to "noID", don't containerize
  if (!devId || devId === "noID" || !shouldContainerize) {
    return (
      <ShadcnTabs {...props}>
        {children}
      </ShadcnTabs>
    );
  }

  return (
    <Container
      componentId={devId}
      selectable={devSelectable}
      meta={{
        id: devId,
        name: devName || 'Tabs',
        description: devDescription || 'Tabs root component',
        filePath: 'src/lib/dev-container/shadcn/Tabs.tsx',
        category: 'navigation',
        semanticTags: ['tabs', 'navigation', 'content', 'ui'],
      }}
    >
      <ShadcnTabs {...props}>
        {children}
      </ShadcnTabs>
    </Container>
  );
};

Tabs.displayName = 'DevTabs';

// TabsList component
type ShadcnTabsListProps = React.ComponentPropsWithoutRef<typeof ShadcnTabsList>;
type DevTabsListProps = ShadcnTabsListProps & DevProps & { children?: React.ReactNode };

export const TabsList = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsList>,
  DevTabsListProps
>(({ devId, devName, devDescription, devSelectable = true, devDetailed, children, ...props }, ref) => {
  const { config } = useDevMode();
  const shouldContainerize = devDetailed === true || (devDetailed !== false && config.detailedContainerization);
  
  // If no devId provided, throw build error
  if (!devId && shouldContainerize) {
    if (import.meta.env.DEV) {
      throw new Error('[Dev Container] devId is required for containerized components. Either provide a devId or set devId="noID" to disable containerization.');
    }
  }
  
  // If no devId provided or explicitly set to "noID", don't containerize
  if (!devId || devId === "noID" || !shouldContainerize) {
    return (
      <ShadcnTabsList ref={ref} {...props}>
        {children}
      </ShadcnTabsList>
    );
  }

  return (
    <Container
      componentId={devId}
      selectable={devSelectable}
      meta={{
        id: devId,
        name: devName || 'TabsList',
        description: devDescription || 'Container for tab triggers',
        filePath: 'src/lib/dev-container/shadcn/Tabs.tsx',
        category: 'navigation',
        semanticTags: ['tabs', 'list', 'container', 'ui'],
      }}
    >
      <ShadcnTabsList ref={ref} {...props}>
        {children}
      </ShadcnTabsList>
    </Container>
  );
});

TabsList.displayName = 'DevTabsList';

// TabsTrigger component
type ShadcnTabsTriggerProps = React.ComponentPropsWithoutRef<typeof ShadcnTabsTrigger>;
type DevTabsTriggerProps = ShadcnTabsTriggerProps & DevProps & { children?: React.ReactNode };

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsTrigger>,
  DevTabsTriggerProps
>(({ devId, devName, devDescription, devSelectable = true, devDetailed, children, ...props }, ref) => {
  const { config } = useDevMode();
  const shouldContainerize = devDetailed === true || (devDetailed !== false && config.detailedContainerization);
  
  // If no devId provided, throw build error
  if (!devId && shouldContainerize) {
    if (import.meta.env.DEV) {
      throw new Error('[Dev Container] devId is required for containerized components. Either provide a devId or set devId="noID" to disable containerization.');
    }
  }
  
  // If no devId provided or explicitly set to "noID", don't containerize
  if (!devId || devId === "noID" || !shouldContainerize) {
    return (
      <ShadcnTabsTrigger ref={ref} {...props}>
        {children}
      </ShadcnTabsTrigger>
    );
  }

  return (
    <Container
      componentId={devId}
      selectable={devSelectable}
      meta={{
        id: devId,
        name: devName || 'TabsTrigger',
        description: devDescription || 'Button that activates a tab',
        filePath: 'src/lib/dev-container/shadcn/Tabs.tsx',
        category: 'navigation',
        semanticTags: ['tabs', 'trigger', 'button', 'interactive', 'ui'],
      }}
    >
      <ShadcnTabsTrigger ref={ref} {...props}>
        {children}
      </ShadcnTabsTrigger>
    </Container>
  );
});

TabsTrigger.displayName = 'DevTabsTrigger';

// TabsContent component
type ShadcnTabsContentProps = React.ComponentPropsWithoutRef<typeof ShadcnTabsContent>;
type DevTabsContentProps = ShadcnTabsContentProps & DevProps & { children?: React.ReactNode };

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof ShadcnTabsContent>,
  DevTabsContentProps
>(({ devId, devName, devDescription, devSelectable = true, devDetailed, children, ...props }, ref) => {
  const { config } = useDevMode();
  const shouldContainerize = devDetailed === true || (devDetailed !== false && config.detailedContainerization);
  
  // If no devId provided, throw build error
  if (!devId && shouldContainerize) {
    if (import.meta.env.DEV) {
      throw new Error('[Dev Container] devId is required for containerized components. Either provide a devId or set devId="noID" to disable containerization.');
    }
  }
  
  // If no devId provided or explicitly set to "noID", don't containerize
  if (!devId || devId === "noID" || !shouldContainerize) {
    return (
      <ShadcnTabsContent ref={ref} {...props}>
        {children}
      </ShadcnTabsContent>
    );
  }

  return (
    <Container
      componentId={devId}
      selectable={devSelectable}
      meta={{
        id: devId,
        name: devName || 'TabsContent',
        description: devDescription || 'Content area for a tab',
        filePath: 'src/lib/dev-container/shadcn/Tabs.tsx',
        category: 'navigation',
        semanticTags: ['tabs', 'content', 'panel', 'ui'],
      }}
    >
      <ShadcnTabsContent ref={ref} {...props}>
        {children}
      </ShadcnTabsContent>
    </Container>
  );
});

TabsContent.displayName = 'DevTabsContent';