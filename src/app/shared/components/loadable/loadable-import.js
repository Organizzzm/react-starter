import Loadable from "react-loadable";
import {LoadingComponent} from "./loading-component";

/**
 * TODO: Make Asynchrony
 */
export function loadableImport(importComponent) {
    return Loadable({
        loader: () => importComponent,
        loading: LoadingComponent,
        delay: 500
    });
}