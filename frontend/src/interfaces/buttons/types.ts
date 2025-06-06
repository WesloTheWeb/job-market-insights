export type filterActions = 'junior' | 'mid-level' | 'senior';

export  interface FilterButtonProps {
    buttonName: string
    filterAction: filterActions
};
