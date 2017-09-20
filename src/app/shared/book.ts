export interface Book {
    isbn: String;
    title: String;
    author: String;
    subtitle: String;
    abstract: String;
    numPages: Number;
    publisher: {
        name: String;
        url: String; 
    }

}
