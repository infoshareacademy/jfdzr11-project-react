export type TodoType = {
    id: number;
    name: string;
    description: string;
    category: 'important' | 'standard' | 'other';
}
  
export type TodoFormModalProps = {
    title: string;
    onFinish: any;
    isVisible: boolean;
    onCancel: any;
    initialValues?: TodoType;
}