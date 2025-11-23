import { useRef } from "react";

const useCustomEffect  = (callback:any, dependencies:any)=>{
    const firstRender = useRef(true);
    const prevDeps = useRef<any[]>([]);
    if(firstRender.current){
        firstRender.current = false;
        callback();
        return;
    }
    const depsChanged = dependencies.length > 0 ? (JSON.stringify(dependencies) !== JSON.stringify(prevDeps.current)) : true;
    if(depsChanged){
        callback();
    }
    prevDeps.current = dependencies;
};
export default useCustomEffect