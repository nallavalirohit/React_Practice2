There are two types of export/import.

1. Default export/import

export default Component/Variable;
import Component/Variable from ".path";

2. Named export/import.

export const Component/Variable;
import {Component/Variable} from "./path";

We use export 'default' keyword if we are exporting only one compnent from a file. But if we are exporting multiple components/variables from a file we don't use default keyword.