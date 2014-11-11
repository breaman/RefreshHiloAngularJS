using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RefreshHiloAngularJS.api
{
    public class PeopleController : ApiController
    {
        public Person[] Get()
        {
            return new List<Person>()
            {
                new Person {Name = "Inigo Montoya",
                    Gifts = new List<Gift> {
                        new Gift{Name="My Father", Description = "I just want my father back", Price = Decimal.MaxValue, EnteredOn = new DateTime(2014, 11, 5)},
                        new Gift{Name="Six Fingered Man", Description = "He killed my father, he should prepare to die", Price = 5000, EnteredOn = new DateTime(2014, 11, 6)}
                }},
                new Person {Name = "Princess Buttercup",
                    Gifts = new List<Gift> {
                        new Gift{Name="Rodent of Unusual Size", Description = "These are really cool", Price = 300, EnteredOn = new DateTime(2014, 10, 30)}
                }},
                new Person {Name = "Fezzik",
                    Gifts = new List<Gift> {
                        new Gift{Name="Dr. Seuss Books", Description = "Best rhyming books around. Get these please.", Price = 20, EnteredOn = new DateTime(2013, 11, 5)},
                        new Gift{Name="Big rocks", Description = "They are a lot of fun to throw", Price = 2, EnteredOn = new DateTime(2014, 9, 5)}
                }},
                new Person {Name = "Westley",
                    Gifts = new List<Gift> {
                        new Gift{Name="50 years of memories", Description = "I lost these somewhere along the way, would love to get them back", Price = 50000, EnteredOn = DateTime.MinValue},
                        new Gift{Name="Miracle Pill", Description = "It tastes good in chocolate", Price = 65, EnteredOn = new DateTime(2014, 8, 6)},
                        new Gift{Name="Brute Squad", Description = "Need it so we can storm the castle", Price = 200, EnteredOn = new DateTime(2014, 8, 7)}
                }},
            }.ToArray();
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public List<Gift> Gifts { get; set; }
    }

    public class Gift
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime EnteredOn { get; set; }
    }
}
