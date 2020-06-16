---
layout: document
title:  "Work with run/debug configurations"
description: To run or debug your code in PyCharm, you can use numerous run/debug configurations. Each run/debug configuration represents a named set of run/debug startup properties. When you perform run, debug, or test operations with PyCharm, you always start a process based on one of the existing configurations using its parameters.

date:   2019-12-31 08:40:50 +0200
categories: jekyll run debug

tags: [jekyll, code]
order_n:  8
---

* TOC
{:toc}

To run or debug your code in PyCharm, you can use numerous run/debug configurations. Each run/debug configuration represents a named set of run/debug startup properties. When you perform run, debug, or test operations with PyCharm, you always start a process based on one of the existing configurations using its parameters.

PyCharm comes with a number of run/debug configuration types for the various running, debugging and testing issues. You can create your own run/debug configurations of specific types.

Each run/debug configuration type has its own default settings. Whenever a new run/debug configuration of the respective type is created, it is based on these default settings.

Temporary run/debug configurations﻿
A temporary run/debug configuration is automatically created every time you choose Run <item_name> or Debug <item_name> for an item without a permanent configuration.

Temporary Run/Debug configurations are recorded in the <project directory>/.idea/workspace.xml file under the Run Manager section.

Save a temporary configuration as permanent﻿
Select the temporary configuration in the Run/Debug Configurations Dialog and click the Save button on the toolbar.

Alternatively, select the temporary configuration in the run/debug configuration selector and then click Save <configuration name> Configuration.

Once you save a temporary configuration it becomes permanent and it is recorded in a separate XML file in the <project directory>/.idea/ directory. For example, MyProject/.idea/Car.xml.

Temporary configurations are marked with semi-transparent icons and are managed the same way as the permanent configurations.

By default, five temporary run/debug configurations are allowed per project, so when you create the sixth configuration, the one created first is removed, and so on. To change this limit, use the Temporary configurations limit field in the Templates page of the Run/Debug Configurations Dialog.

Permanent run/debug configurations﻿
A permanent run/debug configuration is explicitly created for a particular class or method. If there is no permanent configuration for an item, PyCharm automatically creates a temporary configuration for it, when you choose Run <item_name> or Debug <item_name> from the context menu of this class or method.

Run/debug configuration templates﻿
The templates with default run/debug configuration settings are listed in the Run/Debug Configurations dialog under the Templates node. They denote the settings that are used when new run/debug configurations are created.

Do not set up a working directory for the default Run/Debug Configurations listed under the Templates node. This may lead to unresolved targets in newly created Run/Debug Configurations.

You can set the default settings for a specific configuration type that will become applicable to any run/debug configuration of this type created later. Changing defaults does not affect the existing run/debug configurations.

The process of editing per-type default configuration settings is described in Change Templates of Run/Debug Configurations. The process of creating or editing custom run/debug configurations is described in Create and Edit Run/Debug Configurations.