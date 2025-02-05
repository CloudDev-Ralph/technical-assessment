// See https://aka.ms/new-console-template for more information
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter number of levels: ");
        int levels = int.Parse(Console.ReadLine());
        PrintPyramid(levels);
    }
    static void PrintPyramid(int levels)
    {
        for (int i = 1; i <= levels; i++)
        {
            for (int j = 0; j < levels - i; j++)
            {
                Console.Write(" ");
            }
            for (int k = 0; k < (2 * i - 1); k++)
            {
                Console.Write("*");
            }
            Console.WriteLine(); 
        }
    }
}
