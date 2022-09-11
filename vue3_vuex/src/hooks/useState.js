import { mapState, createNamespacedHelpers } from 'vuex';
import { useMapper } from './useMapper';


// export function useState(mapper) {
//     return useMapper(mapper, mapState)
// }

export function useState(moduleName, mapper) {
    let mapperFn = mapState
    if (typeof moduleName === "string" && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    } else {
        // 如果没有传入 moduleName，只传入一个数组，那就是从根组件root获取 getters/state
        mapper = moduleName
    }

    return useMapper(mapper, mapperFn)
}